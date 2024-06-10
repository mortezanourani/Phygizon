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
    loadingDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
    },
}

class Loading extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            (this.props.component) ?
                <div style={componentStyle.loadingDiv}>
                    <GridLoader
                        color="#1AA998"
                        loading={true}
                        size={10}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
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