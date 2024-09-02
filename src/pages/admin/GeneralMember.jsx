import { useState } from "react";
import MemberControl from "@adminComponents/MemberControl";
import MemberTable from "@adminComponents/MemberTable";
import MemberCard from "@adminComponents/MemberCard";

export default function GeneralMember() {
  const [category, setCategory] = useState("전체");
  const [isChange, setIsChange] = useState(false);

  function onSelect(category) {
    setCategory(category);
  }

  function handleChange() {
    let target = document.querySelector("#change");
    if (target) {
      if (target.classList.contains("selected")) {
        target.classList.remove("selected");
      } else {
        target.classList.add("selected");
      }
    }
    setIsChange(!isChange);
  }

  return (
    <main>
      <h2 className="admin-pageTitle">구성원 관리</h2>
      <MemberCard onSelect={onSelect} category={category} />
      <MemberControl
        level="general"
        onChange={handleChange}
        isChange={isChange}
      />
      <MemberTable level="general" category={category} />
    </main>
  );
}
