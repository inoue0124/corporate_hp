// ============================================================
// Carriage お問い合わせフォーム — Google Apps Script
// ============================================================
//
// 【セットアップ手順】
// 1. Google Drive → 新規 → Google Apps Script
// 2. このコードを貼り付け
// 3. 下の定数を自分の環境に合わせて変更
// 4. デプロイ → 新しいデプロイ → ウェブアプリ
//    - 実行ユーザー: 自分
//    - アクセス: 全員
// 5. 表示されたURLをフロントの NEXT_PUBLIC_GAS_URL に設定
// ============================================================

/** 通知先メールアドレス */
var NOTIFY_EMAIL = "info@carri-age.com";

/** スプレッドシートID（空にすると自動作成） */
var SPREADSHEET_ID = "";

/** シート名 */
var SHEET_NAME = "お問い合わせ";

// ============================================================
// POST ハンドラー
// ============================================================
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    var company = data.company || "";
    var name = data.name || "";
    var email = data.email || "";
    var category = data.category || "";
    var message = data.message || "";
    var timestamp = new Date();

    // --- バリデーション ---
    var errors = [];
    if (!name) errors.push("お名前は必須です");
    if (!email) errors.push("メールアドレスは必須です");
    if (!message) errors.push("ご相談内容は必須です");

    if (errors.length > 0) {
      return buildResponse(400, { success: false, errors: errors });
    }

    // --- スプレッドシートに保存 ---
    var sheet = getOrCreateSheet();
    sheet.appendRow([
      timestamp,
      company,
      name,
      email,
      category,
      message,
    ]);

    // --- メール通知 ---
    sendNotification(timestamp, company, name, email, category, message);

    // --- 自動返信 ---
    sendAutoReply(name, email, category, message);

    return buildResponse(200, { success: true });
  } catch (err) {
    Logger.log("Error: " + err.toString());
    return buildResponse(500, { success: false, errors: [err.toString()] });
  }
}

// CORS プリフライト用
function doGet() {
  return buildResponse(200, { status: "ok" });
}

// ============================================================
// スプレッドシート
// ============================================================
function getOrCreateSheet() {
  var ss;

  if (SPREADSHEET_ID) {
    ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  } else {
    // スクリプトに紐づいたスプレッドシートを使う or 新規作成
    var files = DriveApp.getFilesByName("Carriage_お問い合わせ");
    if (files.hasNext()) {
      ss = SpreadsheetApp.open(files.next());
    } else {
      ss = SpreadsheetApp.create("Carriage_お問い合わせ");
      var sheet = ss.getActiveSheet();
      sheet.setName(SHEET_NAME);
      sheet.appendRow([
        "日時",
        "会社名",
        "お名前",
        "メールアドレス",
        "お問い合わせ種別",
        "ご相談内容",
      ]);
      sheet.setFrozenRows(1);
      // 作成されたシートIDをログに出力
      Logger.log("Created spreadsheet: " + ss.getId());
    }
  }

  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow([
      "日時",
      "会社名",
      "お名前",
      "メールアドレス",
      "お問い合わせ種別",
      "ご相談内容",
    ]);
    sheet.setFrozenRows(1);
  }

  return sheet;
}

// ============================================================
// メール通知（管理者向け）
// ============================================================
function sendNotification(timestamp, company, name, email, category, message) {
  var subject = "【お問い合わせ】" + name + "様 - " + (category || "一般");

  var body = [
    "新しいお問い合わせがありました。",
    "",
    "━━━━━━━━━━━━━━━━━━━━",
    "日時:           " + Utilities.formatDate(timestamp, "Asia/Tokyo", "yyyy/MM/dd HH:mm"),
    "会社名:         " + (company || "（未入力）"),
    "お名前:         " + name,
    "メールアドレス: " + email,
    "お問い合わせ種別: " + (category || "（未選択）"),
    "━━━━━━━━━━━━━━━━━━━━",
    "",
    "【ご相談内容】",
    message,
    "",
    "━━━━━━━━━━━━━━━━━━━━",
  ].join("\n");

  GmailApp.sendEmail(NOTIFY_EMAIL, subject, body);
}

// ============================================================
// 自動返信（お客様向け）
// ============================================================
function sendAutoReply(name, email, category, message) {
  var subject = "【キャリッジ株式会社】お問い合わせありがとうございます";

  var body = [
    name + " 様",
    "",
    "お問い合わせいただきありがとうございます。",
    "以下の内容で承りました。",
    "",
    "━━━━━━━━━━━━━━━━━━━━",
    "お問い合わせ種別: " + (category || "（未選択）"),
    "",
    "【ご相談内容】",
    message,
    "━━━━━━━━━━━━━━━━━━━━",
    "",
    "通常1営業日以内にご返信いたします。",
    "しばらくお待ちくださいませ。",
    "",
    "---",
    "キャリッジ株式会社",
    "info@carri-age.com",
    "https://www.carri-age.com",
  ].join("\n");

  GmailApp.sendEmail(email, subject, body, {
    name: "キャリッジ株式会社",
    replyTo: NOTIFY_EMAIL,
  });
}

// ============================================================
// CORS 対応レスポンス
// ============================================================
function buildResponse(statusCode, payload) {
  var output = ContentService.createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
  return output;
}
