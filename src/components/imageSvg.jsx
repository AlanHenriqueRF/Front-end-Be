export default function ImageSvg({ inputRef, image }) {
    return (
        <img src={image} onClick={() => inputRef.current.focus()} alt="" />
    )
}