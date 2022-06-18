import React from "react";
import { HeaderSite, Logo } from "../../Components/HeaderAll/styled";
import { QuadranteFeed } from "../Feeds/styled"
import { BotaoPosts,BotaoLogout } from "../Feeds/styled"
import { Input, Space } from "antd";


const onSearch = (value) => console.log(value);

export default function Feeds() {
  const { Search } = Input;

  return (
    <HeaderSite>
      <Logo src="https://i.postimg.cc/3wWpMH8Q/Labeddit-1.png" />
      <Space direction="vertical">
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
          style={{
            width: 900,
            paddingLeft: 50,            
          }}
        />
        <BotaoPosts type="submit">
          Posts
        </BotaoPosts>
        
        <BotaoLogout type="submit">
          Logout
        </BotaoLogout>
        <QuadranteFeed/>
      </Space>
      
    </HeaderSite>
  );
}
=======
// import React from "react";
// import { HeaderSite, Logo } from "../../Components/HeaderAll/styled";
// import { QuadranteFeed } from "../Feeds/styled"
// import { Input, Space } from "antd";


// const onSearch = (value) => console.log(value);

// export default function Feeds() {
//   const { Search } = Input;

//   const suffix = (
//     <AudioOutlined
//       style={{
//         fontSize: 16,
//         color: "#1890ff",
        
//       }}
//     />
//   );
//   return (
//     <HeaderSite>
//       <Logo src="https://i.postimg.cc/3wWpMH8Q/Labeddit-1.png" />
//       <Space direction="vertical">
//         <Search
//           placeholder="input search text"
//           onSearch={onSearch}
//           enterButton
//           style={{
//             width: 900,
//             paddingLeft: 50,
            
//           }}
//         />
//         <QuadranteFeed/>
//       </Space>
//       ,
//     </HeaderSite>
//   );
// }



