const useScrollTo = () => {
  const scrollTo = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      behavior: "smooth",
    });
  };

  return { scrollTo };
};

export default useScrollTo;
