import gears from '../../assets/images/gears.svg';

const style = {
    div: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    img: {
        width: '50%',
        objectFit: 'cover'
    }
}

function UnderConstruction() {
    return (
        <div style={style.div}>
            <img src={gears} style={style.img} alt="Under Construction" />
        </div>
    )
}

export default UnderConstruction;