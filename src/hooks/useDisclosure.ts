import * as React from 'react';

const useDisclosure = () => {
  const [isShow, setShow] = React.useState(false);

  const onToggle = React.useCallback(() => {
    setShow((prevShow) => !prevShow);
  }, []);

  const onClose = React.useCallback(() => {
    setShow(false);
  }, []);

  const onShow = React.useCallback(() => {
    setShow(true);
  }, []);

  return {
    isShow,
    onToggle,
    onClose,
    onShow,
  };
};

export { useDisclosure };
export default useDisclosure;
