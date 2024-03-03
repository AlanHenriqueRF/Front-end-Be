import PropTypes from 'prop-types';

export default function ImageSvg({ inputRef, image }) {
    return (
        <img src={image} onClick={() => inputRef.current.focus()} alt="" />
    )
}

ImageSvg.propTypes = {
    inputRef: PropTypes.shape({
        current: PropTypes.instanceOf(Element)
    }),
    image: PropTypes.string.isRequired
};