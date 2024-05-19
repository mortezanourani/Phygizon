import { Component } from 'react';
import { GridLoader } from 'react-spinners';

const style = {
    loadingWrapper: {
        position: 'fixed',
        width: '100vw',
        minHeight: '100vh',
        left: 0,
        top: 0,
        background: 'rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(16px)',
    },
    loadingDiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'inherit'
    },
}

class Loading extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={style.loadingWrapper}>
                <div style={style.loadingDiv}>
                    <GridLoader
                        color="#1AA998"
                        loading={true}
                        size={20}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            </div>
        )
    }
}

export default Loading;