import { useEffect, useState } from "react";
import { InputNumber, Input } from "antd";
function AboutPage() {
  const [searchKey, setSearchKey] = useState("");
  const [pin1, setPin1] = useState(0);
  const [pin2, setPin2] = useState(0);
  const [pin3, setPin3] = useState(0);

  useEffect(() => {
    if (pin1 === 2 && pin2 === 6 && pin3 === 2) console.log("Unlock");
  }, [pin1, pin2, pin3]);
  return (
    <div>
      About Page
      <div>
        <Input onChange={(e) => setSearchKey(e.target.value)} />
        <InputNumber min={1} max={9} onChange={(value) => setPin1(value)} />
        <InputNumber min={1} max={9} onChange={(value) => setPin2(value)} />
        <InputNumber min={1} max={9} onChange={(value) => setPin3(value)} />
      </div>
    </div>
  );
}

export default AboutPage;
