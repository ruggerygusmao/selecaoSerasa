import { Box } from "./components/Box";
import { Display } from "./components/Display";
import { HeadingL } from "./components/HeadingL";
import { HeadingM } from "./components/HeadingM";
import { HeadingS } from "./components/HeadingS";
import { HeadingXs } from "./components/HeadingXs";
import { SubHeading } from "./components/SubHeading";
import { Main } from "./components/Main/Main";
import { Table } from "./components/Table";
import { TextM } from "./components/TextM";
import { TextP } from "./components/TextP";
import { Footnote } from "./components/Footnote";
import logo from "./logo/logo.png"
import { Logo } from "./components/Logo";
function App() {
  return (
    <div>
        <Box display="flex" justify="space-between" bgColor="#e63888" align="center">
          <HeadingL color="#fff">
            Type
          </HeadingL>
          <Logo>
            <img src={logo} alt="Logo.png"/>
          </Logo>
        </Box>
        <Box display="flex" margin="80px 0 0 0">
            <Box display="flex" direction="column" width="30%">
              <TextM>
                Typeface: Roboto
              </TextM>
              <Footnote>
                https://fonts.google.com/specimen/Roboto
              </Footnote>
            </Box>
          <Box display="flex">
            <TextM margin="0 5px 0 0">
              Weights: Regular 400.
            </TextM>
            <TextM weight="700" margin="0">
              Bold 700
            </TextM>
          </Box>
        </Box>
        <Main>
        <Box
            margin="60px 0 0 0"
            height="100%" 
            bgColor="#EBECF0"
          >
            <HeadingS margin="0 0 30px 80px">
              Heading
            </HeadingS>
            <Table>
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Size</th>
                      <th>Line</th>
                      <th>weight</th>
                      <th>Letter spacing</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td><Display>Display</Display></td>
                    <td>48px (3 rem) 40px (2,5 rem)</td>
                    <td>52px 44px</td>
                    <td>Bold (700)</td>
                    <td>-1,2</td>
                   
                  </tr>
                  <tr>
                    <td><HeadingL>HeadingL</HeadingL></td>
                    <td>40px (2,5 rem) 32px (2 rem)</td>
                    <td>36px 28px</td>
                    <td>Bold (700)</td>
                    <td>-1</td>
                  </tr>
                  <tr>
                    <td><HeadingM>HeadingM</HeadingM></td>
                    <td>32px (2 rem) 24px (1,5 rem)</td>
                    <td>36px 28px</td>
                    <td>Bold (700)</td>
                    <td>-0,8</td>
                  </tr>
                  <tr>
                    <td><HeadingS>HeadingS</HeadingS></td>
                    <td>24px (1,5 rem) 20px (1,25 rem)</td>
                    <td>28px 24px</td>
                    <td>Bold (700)</td>
                    <td>-0,6</td>
                  </tr>
                  <tr>
                    <td><HeadingXs>HeadingXs</HeadingXs></td>
                    <td>20px (1,5 rem) 18px (1,125 rem)</td>
                    <td>24px 22px</td>
                    <td>Bold (700)</td>
                    <td>-1,2</td>
                  </tr>
                  <tr>
                    <td><SubHeading>HeadingS</SubHeading></td>
                    <td>16px (1 rem)</td>
                    <td>20px</td>
                    <td>Bold (700)</td>
                    <td>-</td>
                  </tr>
              </tbody>
            </Table>
        </Box>

        <Box
            margin="60px 0 50px 0"
            height="100%" 
            bgColor="#EBECF0"
          >
            <HeadingS margin="0 0 0 80px">
              Body
            </HeadingS>
            <Footnote color="#8D93A1" margin="0 0 30px 80px">
              Normal body text: Regular (400), Emphasys: Bold 700
            </Footnote>
            <Table>
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Size</th>
                      <th>Line</th>
                      <th>weight</th>
                      <th>Letter spacing</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td><TextM>Body M</TextM></td>
                    <td>16px (1 rem)</td>
                    <td>24px</td>
                    <td>Regular (400), Bold (700)</td>
                    <td> - </td>
                  </tr>
                  <tr>
                    <td><TextP>Body P</TextP></td>
                    <td>14px (1 rem)</td>
                    <td>20px</td>
                    <td>Regular (400), Bold (700)</td>
                    <td> - </td>
                  </tr>
                  <tr>
                    <td><Footnote>Footnote</Footnote></td>
                    <td>12px (1 rem)</td>
                    <td>16px</td>
                    <td>Regular (400), Bold (700)</td>
                    <td> - </td>
                  </tr>
              </tbody>
            </Table>
        </Box>
        </Main>
    </div>
  );
}

export default App;
