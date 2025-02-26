import { useSpring } from '@react-spring/web';

export const useFadeInUp = (config = { duration: 500 }) => {
  return useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config,
  });
};