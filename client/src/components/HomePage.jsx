import "../css/HomePage.css";
export default function HomePage() {
  return (
    <div className="home-page-main d-flex w-100">
      <svg
        className="svg-wave1"
        viewBox="0 0 882 832"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 -2C227.055 6.5102 520.175 54.0322 594.208 219.03C686.75 425.277 612.926 509.526 754.5 655C796.857 698.524 867 704.5 881 745C881 745 883.5 758.5 873.159 799.923C857.427 832 807.808 832 807.808 832C758.119 832 396.715 832 0 832V-2Z"
          fill="white"
        />
      </svg>

      <svg
        className="svg-wave2"
        viewBox="0 0 1116 449"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M281.691 164.739C125.611 172.851 -127.413 451 75.6268 451H1117V231.455C1105.67 217.381 1087.91 150.682 1028.12 113.165C977.832 81.6058 903.794 153.219 851.062 95.6585C776.071 13.8021 610.815 -33.0405 480.276 27.5235C386.202 71.1695 476.791 154.6 281.691 164.739Z"
          fill="#FFDF6F"
        />
      </svg>
      <img
        className="girl"
        src="/assets/images/girl.png"
        alt="Girl illustration"
      />
    </div>
  );
}
