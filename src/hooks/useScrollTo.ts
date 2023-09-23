const useScrollTo = () => {
  const scrollTo = (ref: any) => {
    window.scrollTo({
      top: ref.offsetTop,
      behavior: "smooth",
    });
  };

  return { scrollTo };
};

export default useScrollTo;
