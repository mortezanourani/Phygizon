import notfound from '../../assets/images/404.webp';

const style = {
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    }
}

function NotFound() {
    return (
        <div className="notfound">
            <img src={notfound} style={style.img} alt="Page Not Found" />
        </div>
    )
}

export default NotFound;