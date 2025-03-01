import { useParams } from "react-router-dom";
import { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import SearchBar from "../components/SearchBar";
import "./Wiki.css";

export default function Wiki() {
  const { title } = useParams();
  const [search, setSearch] = useState(title);

  const description_markdown = `
# 마크다운 문법 테스트용 한글 텍스트

## 제목 테스트
# 제목 1
## 제목 2
### 제목 3
#### 제목 4
##### 제목 5
###### 제목 6

## 목록 테스트
- 첫 번째 항목
- 두 번째 항목
  - 하위 항목 1
  - 하위 항목 2
- 세 번째 항목  

1. 첫 번째 항목
2. 두 번째 항목
   1. 하위 항목 1
   2. 하위 항목 2
3. 세 번째 항목  

## 텍스트 강조
**굵게**  
*기울임*  
~~취소선~~  
\`인라인 코드\`  

## 코드 블록
\`\`\`javascript
console.log("Hello, Markdown!");
\`\`\`

\`\`\`python
def hello():
    print("안녕하세요, 마크다운!")

hello()
\`\`\`

## 링크 및 이미지
[GitHub](https://github.com)  

![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)

## 인용문
> 인용문 테스트  
>> 중첩된 인용문  

## 테이블
| 제목 1 | 제목 2 | 제목 3 |
|--------|--------|--------|
| 값 1   | 값 2   | 값 3   |
| 값 4   | 값 5   | 값 6   |

## 체크리스트
- [x] 완료된 항목
- [ ] 미완료된 항목

  `;

  return (
    <>
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      <div className="wiki-container">
        <div className="wiki-title">{title}</div>
        <div className="wiki-markdown">
          <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {description_markdown}
          </Markdown>
        </div>
      </div>
    </>
  );
}
