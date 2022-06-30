import {
  BoxProps,
  Center,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from '@chakra-ui/react';
import { FC } from 'react';

const CompanyOverview: FC<BoxProps> = (props) => {
  return (
    <Center>
      <TableContainer {...props}>
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Td>会社名</Td>
              <Td>キャリッジ株式会社</Td>
            </Tr>
            <Tr>
              <Td>設立</Td>
              <Td>2022年7月</Td>
            </Tr>
            <Tr>
              <Td>資本金</Td>
              <Td>1,000,000円</Td>
            </Tr>
            <Tr>
              <Td>代表者</Td>
              <Td>代表取締役 井上雄介</Td>
            </Tr>
            <Tr>
              <Td>役員</Td>
              <Td>取締役 水野宏明</Td>
            </Tr>
            <Tr>
              <Td>所在地</Td>
              <Td>東京都渋谷区渋谷2-19-15宮益坂ビルディング609</Td>
            </Tr>
            <Tr>
              <Td>事業内容</Td>
              <Td>
                ラーニングマネジメントシステムの開発、販売
                Webアプリケーションシステムの受託開発
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Center>
  );
};

export default CompanyOverview;
