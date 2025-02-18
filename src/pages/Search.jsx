import WikiCard from "../components/WikiCard";

export default function Search() {
  return (
    <div>
      <h1>Search</h1>
      <p>Welcome to the search page.</p>
      <WikiCard
        title="누군가"
        enteredIn={23}
        college="첨단융합대학"
        department="컴퓨터공학전공"
      />
    </div>
  );
}
