import { useState } from "react";
import MemberControl from "../../components/admin/MemberControl";
import MemberTable from "../../components/admin/MemberTable";
import MemberCard from "../../components/admin/MemberCard";

export default function SuperMember() {
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
        level="super"
        onChange={handleChange}
        isChange={isChange}
      />
      <MemberTable level={"super"} category={category} />
    </main>
  );
}
