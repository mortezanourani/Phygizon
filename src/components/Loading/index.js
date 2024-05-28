import { Component } from 'react';
import { BeatLoader, GridLoader } from 'react-spinners';

const style = {
    loadingWrapper: {
        position: 'fixed',
        width: '100%',
        minHeight: '100vh',
        left: 0,
        top: 0,
        background: 'rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(16px)',
        zIndex: '999',
    },
    loadingDiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'inherit'
    },
}

const componentStyle = {
    loadingWrapper: {
        position: 'relative',
        width: '100%',
        Height: '100%',
        minHeight: '160px',
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
            (this.props.component) ?
                <div style={componentStyle.loadingWrapper}>
                    <div style={componentStyle.loadingDiv}>
                        <BeatLoader
                            color="#1AA998"
                            loading={true}
                            size={16}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>
                </div>
                :
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