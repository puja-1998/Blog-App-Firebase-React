const Divider = () => {
    return (
      <div style={{ display: "flex", alignItems: "center", margin: "5px 0" }}>
        <div style={{ flexGrow: 1, height: "1px", width:"200px", backgroundColor: "black" }}></div>
        <span style={{ margin: "0 10px", color: "black", fontWeight: "bold" }}>or</span>
        <div style={{ flexGrow: 1, height: "1px", width:"200px", backgroundColor: "black" }}></div>
      </div>
    );
  };
  
  export default Divider;
  