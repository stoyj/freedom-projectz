import React from "react";
import Image from "./components/elements/Image/Image";
import Link from "./components/elements/Link/Link";
import List from "./components/elements/List/List";
import Title from "./components/elements/Title/Title";
import Text from "./components/elements/Text/Text";
import Button from "./components/elements/Button/Button";
import Checkbox from "./components/elements/Checkbox/Checkbox";
import Icon from "./components/elements/Icon/Icon";
import Input from "./components/elements/Input/Input";
import Radio from "./components/elements/Radio/Radio";

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
      <Text />
      <Button />
      <Checkbox />
      <Icon />
      <Input />
      <Radio />
      {/* <Button /> */}
    </div>
  );
}

export default App;
