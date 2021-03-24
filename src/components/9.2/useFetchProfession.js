import React from "react";

export function useFetchProfession() {
  const [profession, setProfession] = React.useState("");
  const [reviews, setReviews] = React.useState(0);
  const [loading, setLoading] = React.useState("");

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setProfession("Software engineer");
      setLoading(false);
    }, 3000);
    setInterval(() => {
      const reviewsValue = Math.random() * 10;
      setReviews(reviewsValue);
      console.log("Setting reviews to ", reviewsValue);
      setLoading(false);
    }, 5000);
  }, []);

  return { profession, loading, reviews };
}
