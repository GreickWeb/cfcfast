function ButtonYellow({ children, onClick }) {
  return (
    <button className="Button-yellow" onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonYellow
