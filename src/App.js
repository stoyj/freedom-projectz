// import React from "react";
// import Title from "./components/elements/Title/Title";
// import Image from "./components/elements/Image/Image";
// import Link from "./components/elements/Link/Link";
// import List from "./components/elements/List/List";
// // import Button from "./components/Button/Button";

// function App() {
//   return (
//     <div>
//       <Title text="freedomprojectz!" />
//       <Image
//         src="https://freedomprojectz.com/pages/global-ministries"
//         alt="Home"
//         width="300"
//         height="200"
//       />
//       <Link href="freedomprojectz.com" text="Отиди в freedomprojectz" />
//       <List
//         items={[
//           "Home",
//           "Our Story",
//           "Events",
//           "Ministries",
//           "Give Now",
//           "Videos",
//         ]}
//       />
//       {/* <Button /> */}
//     </div>
//   );
// }

// export default App;

// import Title from "./src/elements/Title/Title";
// import Image from "./src/elements/Image/Image";
// import Link from "./src/elements/Link/Link";
// import List from "./src/elements/List/List";
// function App() {
//   return (
//     <div>
//       <Title text="Freedom Projectz ✨" />
//       <Image
//         src="https://freedomprojectz.com/"
//         alt="freedom projectz"
//         width="300"
//         height="200"
//       />
//       <Link href="https://freedomprojectz.com/">freedomproject</Link>
//       <List
//         items={[
//           "Home",
//           "Our Story",
//           "Events",
//           "Ministries",
//           "Give Now",
//           "VIDEOS",
//         ]}
//       />
//     </div>
//   );
// }

import React from "react";
import Image from "./elements/Image/Image";
import Link from "./elements/Link/Link";
import List from "./elements/List/List";
import Title from "./elements/Title/Title";

function App() {
  return (
    <div>
      <Title text="freedomprojectz!" />
      <Image
        src="https://freedomprojectz.com/pages/global-ministries"
        alt="Home"
        width="300"
        height="200"
      />
      <Link href="freedomprojectz.com" text="Отиди в freedomprojectz" />
      <List
        items={[
          "Home",
          "Our Story",
          "Events",
          "Ministries",
          "Give Now",
          "Videos",
        ]}
      />
      {/* <Button /> */}
    </div>
  );
}

export default App;
