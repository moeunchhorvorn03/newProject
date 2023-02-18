export default function Movie(props){
    
    return (
        <div className="movies-box">
            <div class="movies-card"> 
                <div class="icons"> 
                    <div class="quality">HD</div>
                </div> 
                <a href="" title="" class="poster"> 
                    <img src={`${props.poster}`}/>         
                </a> 
                <span class="imdb">
                    <i class="fa fa-star"></i>{props.rating}
                </span>
                <h3>
                    <a class="title" title="" href="">{props.title}</a>
                </h3> 
                <div class="meta"> {props.ss} 
                    <i class="dot">
                        </i> {props.eps} 
                    <i class="type">Movie
                        </i> 
                </div> 
            </div>
        </div>
    )
}