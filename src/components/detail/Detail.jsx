import './detail.css'

const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png"  alt="" />
        <h2>Sampath</h2>
        <p>Hello,how are you doing these days?</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
           <div className="photoItem">
            <img src="https://via.placeholder.com/150" alt="" />
            <span>photo_2024_2.png</span>
           </div>
           <img src="./download.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
      </div>
    </div>
  )
}

export default Detail