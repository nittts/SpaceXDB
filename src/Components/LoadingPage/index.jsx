import "./styles.css"

function LoadingPage() {

    return(
        <div className="loading-screen">
           <div className="loading-text">
               <h1>Loading Page...</h1>
           </div>
           <div className="loading-spin"></div>
        </div>
    )
}

export default LoadingPage