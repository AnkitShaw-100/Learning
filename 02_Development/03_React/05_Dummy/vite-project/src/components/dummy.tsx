interface Props {
  appear?: boolean;
  setAppear: React.Dispatch<React.SetStateAction<boolean>>;
}

const dummy = (props: Props) => {
  const { appear, setAppear } = props;
  const changeS = () => {
    setAppear(false);
  };
  return (
    <div>
      <div className="bg-red-900 h-[400px] w-[400px]"></div>
      <button onClick={changeS}>{appear ? "Close" : "Open"}</button>

      <p>{String(appear)}</p>
    </div>
  );
};

export default dummy;
