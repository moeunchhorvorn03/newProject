

export default function Streaming(props){
    return (
        <div className="stream-card">
            
            <img className="streaming-img" src={`./app-images/${props.img}`} alt=""/>
            <div className="grandient"></div>
            <div className="stream-text">
            <h1 alt="" className="streaming-title">{props.title}</h1>
            <h1 alt="" className="streaming-story">{props.story}</h1>
            <button alt=""  className="btn-watch" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">WATCH</button>
            <img alt="" className="us"  src="./app-images/us.png"/>
            <h1 className="eng">English</h1>
            </div>
        </div>
    )
}