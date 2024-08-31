"use client";

import { useState, useRef, useEffect } from "react";

const Main = () => {
  // to catch the value
  const [inputValue, setInputValue] = useState("");

  // to catch footer to put in it the value
  const catchingFooter = useRef<HTMLDivElement>(null!);

  // to focus on the search bar
  const focusSearch = useRef<HTMLInputElement>(null!);
  useEffect(() => {
    focusSearch.current.focus();
  }, []);

  // set local storage
  const updateStorage = () =>
    localStorage.setItem("list", catchingFooter.current.innerHTML);
  useEffect(() => {
    catchingFooter.current.innerHTML = localStorage.getItem("list") || "";

    (
      document.querySelectorAll(".button") as NodeListOf<HTMLButtonElement>
    ).forEach((button) => {
      button.addEventListener("click", () => {
        const parentElement = button.parentElement as HTMLElement;

        localStorage.removeItem("list");
        parentElement.remove();
        focusSearch.current.focus();

        updateStorage();
      });
    });
  }, []);

  // Add button
  const handleClickButton = () => {
    // if empty do not create anything
    if (inputValue.trim() !== "") {
      // div container
      const div = document.createElement("div");
      div.className =
        "list flex justify-between items-center font-bold text-2xl";

      // text
      const p = document.createElement("p");
      p.className = "relative pl-6 cursor-pointer";
      p.innerHTML = inputValue || "";
      div.appendChild(p);
      p.addEventListener("click", () => {
        p.classList.toggle("done");
        span.classList.toggle("active");
      });

      // the circle before text
      const span = document.createElement("span");
      span.className =
        "border-2 border-red-500 absolute left-0 top-2/4 -translate-y-2/4 w-4 h-4 rounded-full";
      p.appendChild(span);

      // to remover the div container
      const button = document.createElement("button");
      button.className =
        "button flex items-center justify-center rounded-full w-9 h-9 hover:bg-black/10 duration-300";
      button.style.fontFamily = "cursive";
      button.innerHTML = `<img class="w-4 h-4" src="https://img.icons8.com/?size=256w&id=111057&format=png">`;
      div.appendChild(button);
      button.addEventListener("click", () => {
        const parentElement = button.parentElement as HTMLElement;

        localStorage.removeItem("list");
        parentElement.remove();
        focusSearch.current.focus();

        updateStorage();
      });

      catchingFooter.current.appendChild(div);

      updateStorage();
      setInputValue("");
      focusSearch.current.focus();
    }
  };

  return (
    <>
      <main className="my-5 w-full flex justify-center items-center relative text-2xl">
        <input
          type="Search"
          placeholder="Add your task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          ref={focusSearch}
          className="bg-black/10 h-14 w-full rounded-full p-5 pr-[85px]"
        />

        <button
          onClick={handleClickButton}
          className="w-[20%] h-full bg-red-600 hover:bg-red-700 duration-300 font-bold text-white flex items-center justify-center rounded-full absolute right-0"
        >
          Add
        </button>
      </main>

      <footer ref={catchingFooter}></footer>
    </>
  );
};

export default Main;
