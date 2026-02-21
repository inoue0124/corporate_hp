'use client';

import { useState } from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const GAS_URL =
  'https://script.google.com/macros/s/AKfycbw3lC3NkDzzT4BOFEijrV01m43bdDckXopaqkbnp5VievvF_fMCUEApI2ZIoZdjhWGj/exec';

const categories = [
  'MVP・プロトタイプ開発の相談',
  'アプリ開発の相談',
  'AI活用の相談',
  '見積もり依頼',
  'その他',
];

interface FormData {
  company: string;
  name: string;
  email: string;
  category: string;
  message: string;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    company: '',
    name: '',
    email: '',
    category: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch(GAS_URL, {
        method: 'POST',
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setForm({ company: '', name: '', email: '', category: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.errors?.join(', ') || '送信に失敗しました');
      }
    } catch {
      setStatus('error');
      setErrorMessage('通信エラーが発生しました。しばらく経ってからお試しください。');
    }
  };

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-2xl px-4">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <p className="font-koho text-sm tracking-widest text-accent-purple">
              Contact
            </p>
            <h1 className="mt-4 text-3xl font-bold md:text-5xl">
              まずは壁打ちから。
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-text-secondary">
              「こんなの作れる？」「予算感を知りたい」「AIで何ができる？」
              <br />
              なんでもお気軽にご相談ください。通常1営業日以内にご返信いたします。
            </p>
          </div>
        </ScrollReveal>

        {status === 'success' ? (
          <ScrollReveal>
            <div className="rounded-2xl border border-accent-purple/50 bg-accent-purple/5 p-10 text-center">
              <p className="text-4xl">✓</p>
              <h2 className="mt-4 text-2xl font-bold">
                送信ありがとうございます
              </h2>
              <p className="mt-3 text-text-secondary">
                確認メールをお送りしました。
                <br />
                通常1営業日以内にご返信いたします。
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-8 text-sm text-accent-purple underline"
              >
                別のお問い合わせをする
              </button>
            </div>
          </ScrollReveal>
        ) : (
          <ScrollReveal delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-2xl border border-border bg-bg-card p-6 md:p-10"
            >
              {/* 会社名 */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-bold text-text-primary"
                >
                  会社名
                  <span className="ml-2 text-xs font-normal text-text-secondary">
                    任意
                  </span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="キャリッジ株式会社"
                  className="mt-2 w-full rounded-lg border border-border bg-bg-primary px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent-purple focus:outline-none"
                />
              </div>

              {/* お名前 */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-text-primary"
                >
                  お名前
                  <span className="ml-2 text-xs font-normal text-accent-purple">
                    必須
                  </span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="山田 太郎"
                  className="mt-2 w-full rounded-lg border border-border bg-bg-primary px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent-purple focus:outline-none"
                />
              </div>

              {/* メールアドレス */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-text-primary"
                >
                  メールアドレス
                  <span className="ml-2 text-xs font-normal text-accent-purple">
                    必須
                  </span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-lg border border-border bg-bg-primary px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent-purple focus:outline-none"
                />
              </div>

              {/* お問い合わせ種別 */}
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-bold text-text-primary"
                >
                  お問い合わせ種別
                  <span className="ml-2 text-xs font-normal text-text-secondary">
                    任意
                  </span>
                </label>
                <select
                  id="category"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-border bg-bg-primary px-4 py-3 text-sm text-text-primary focus:border-accent-purple focus:outline-none"
                >
                  <option value="">選択してください</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* ご相談内容 */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-text-primary"
                >
                  ご相談内容
                  <span className="ml-2 text-xs font-normal text-accent-purple">
                    必須
                  </span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="お気軽にご記入ください"
                  className="mt-2 w-full resize-y rounded-lg border border-border bg-bg-primary px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent-purple focus:outline-none"
                />
              </div>

              {/* エラー */}
              {status === 'error' && (
                <p className="text-sm text-red-400">{errorMessage}</p>
              )}

              {/* 送信ボタン */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full rounded-full bg-accent-purple px-8 py-4 text-base font-bold text-white shadow-lg shadow-accent-purple/25 transition-all duration-300 hover:bg-accent-purple/80 hover:shadow-accent-purple/40 disabled:opacity-50"
              >
                {status === 'submitting' ? '送信中...' : '送信する →'}
              </button>
            </form>
          </ScrollReveal>
        )}

        <ScrollReveal delay={0.3}>
          <p className="mt-8 text-center text-sm text-text-secondary">
            フォーム以外でのご連絡は{' '}
            <a
              href="mailto:info@carri-age.com"
              className="text-accent-purple underline"
            >
              info@carri-age.com
            </a>{' '}
            までお気軽にどうぞ。
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}
