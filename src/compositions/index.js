import { ref } from 'vue';

export function useIsxsScreen() {
  const isxsScreen = ref(document.body.clientWidth <= 768);

  window.addEventListener('resize', () => {
    isxsScreen.value = document.body.clientWidth <= 768;
  });
  return isxsScreen;
}
