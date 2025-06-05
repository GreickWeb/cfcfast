function ButtonTransparent({ children, onClick }) {
  return (
    <button className="Button-transparent" onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonTransparent
