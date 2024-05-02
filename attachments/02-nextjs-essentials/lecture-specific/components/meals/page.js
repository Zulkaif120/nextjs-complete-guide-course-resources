import React from "react";
import styles from "@/app/meals/page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";

export default function Mealpage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meal created{" "}
          <span className={styles.highlight}>by You</span>
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share your favourite recie</Link>
        </p>
      </header>
      <main className={styles.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
