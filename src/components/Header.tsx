export function Header() {
  //hook
  // useEffect(() => {
  //    fetchGiphyApiSearch().then((giphys) => setGiphys(giphys));
  // }, [])
  return (
    <div className="Header">
      <h1>GIF APP</h1>
      {/* <img src="../PoweredByGIFLogo.gif" alt="" /> */}
      <h2>
        {" "}
        "Powered By <a href="www.giphy.com">GIPHY</a>"
      </h2>
    </div>
  );
}
//console.log(Header);
