declare module 'svelte-icons-pack/Icon.svelte' {
  import { SvelteComponent } from 'svelte';
  declare class Icon extends SvelteComponent<{
    src: any;
    size: string;
    color?: string;
    title?: string;
    className?: string;
  }> {}
  export default Icon;
}
