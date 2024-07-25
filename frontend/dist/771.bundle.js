'use strict';
(self.webpackChunkcode_zap = self.webpackChunkcode_zap || []).push([
  [771],
  {
    5771: (t, n, e) => {
      e.d(n, { worker: () => h });
      var i = e(9303),
        l = e(5994),
        a = e(692),
        o = e(7963);
      const s = JSON.parse(
          '{"id":2024,"title":"회원가입 유효성 검증","snippets":[{"id":305,"filename":"filename1.txt","content":"import { Flex } from \'@/components/Flex\';\\nimport { Prism as SyntaxHighlighter } from \'react-syntax-highlighter\';\\nimport { monokaiSublime } from \'react-syntax-highlighter/dist/esm/styles/hljs\';\\n\\nconst Template = () => {\\n  const content = \'\';\\n  return (\\n    <>\\n      <Flex direction=\'column\' justify=\'flex-start\' align=\'center\'>\\n        <h1>회원 가입 검증</h1>\\n        <span>CodeZap</span>\\n\\n        <SyntaxHighlighter language=\'javascript\' style={monokaiSublime}>\\n          {content}\\n        </SyntaxHighlighter>\\n      </Flex>\\n    </>\\n  );\\n};\\n\\nexport default Template","ordinal":1},{"id":306,"filename":"filename2.java","content":"import { Flex } from \'@/components/Flex\';\\nimport { Prism as SyntaxHighlighter } from \'react-syntax-highlighter\';\\nimport { monokaiSublime } from \'react-syntax-highlighter/dist/esm/styles/hljs\';\\n\\nconst Template = () => {\\n  const content = \'\';\\n  return (\\n    <>\\n      <Flex direction=\'column\' justify=\'flex-start\' align=\'center\'>\\n        <h1>회원 가입 검증</h1>\\n        <span>CodeZap</span>\\n\\n        <SyntaxHighlighter language=\'javascript\' style={monokaiSublime}>\\n          {content}\\n        </SyntaxHighlighter>\\n      </Flex>\\n    </>\\n  );\\n};\\n\\nexport default Template","ordinal":2}],"modifiedAt":"2024-07-11 12:34"}',
        ),
        m = JSON.parse(
          '{"templates":[{"id":2024,"title":"title1","thumbnailSnippet":{"filename":"title1.java","thumbnailContent":"import { Flex } from \'@/components/Flex\';\\nimport { Prism as SyntaxHighlighter } from \'react-syntax-highlighter\';\\nimport { monokaiSublime } from \'react-syntax-highlighter/dist/esm/styles/hljs\';\\n\\nconst Template = () => {\\n  const content = \'\';\\n  return (\\n    <>\\n      <Flex direction=\'column\' justify=\'flex-start\' align=\'center\'>\\n        <h1>회원 가입 검증</h1>"},"modifiedAt":"2024-07-11 12:34"},{"id":2025,"title":"title2","thumbnailSnippet":{"filename":"title1.java","thumbnailContent":"public class ......"},"modifiedAt":"2024-07-10 12:34"},{"id":2026,"title":"title3","thumbnailSnippet":{"filename":"title1.java","thumbnailContent":"const GlobalStyles = () => {"},"modifiedAt":"2024-07-09 12:34"},{"id":2027,"title":"title4","thumbnailSnippet":{"filename":"title1.java","thumbnailContent":"public class ......"},"modifiedAt":"2024-07-08 12:34"},{"id":2028,"title":"title5","thumbnailSnippet":{"filename":"title1.java","thumbnailContent":"public class ......"},"modifiedAt":"2024-07-07 12:34"}]}',
        ),
        r = [
          l.L.get(`${o.m$}`, () => a.c.json(m)),
          l.L.get(`${o.m$}/:id`, () => a.c.json(s)),
          l.L.post(`${o.m$}`, async () => a.c.json({ status: 201 })),
        ],
        h = (0, i.k)(...r);
    },
  },
]);
