type ModalProps = {
  children: React.ReactNode
  closeModal: () => void
}

export default function Modal({ children, closeModal }: ModalProps) {
  return (
    <div
      className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50"
      onClick={closeModal}
    >
      <div className="slide-in-bottom" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
