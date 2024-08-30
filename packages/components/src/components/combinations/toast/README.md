# Toast

## Structure

- ToastGroup
  - Panel
    - Toast
      - Title
      - CloseButton
      - Message

```tsx
function App({ children }) {
  return (
    <ToastGroup>
      <ToastGroup.Panel>
        {({ toasts }) => (
          <div className='flex flex-col space-y-4'>
            {toasts.map((toast) => (
              <Toast key={toast.id} {...toast}>
                <Toast.Title>{toast.title}</Toast.Title>
                <Toast.CloseButton />
                <Toast.Message>{toast.message}</Toast.Message>
              </Toast>
            ))}
          </div>
        )}
      </ToastGroup.Panel>

      {children}
    </ToastGroup>
  );
}
```
