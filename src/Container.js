import { init } from '.';

export default ({ globals, modules, theme, utils, options, callback, ...props }) => {
  Object.assign(window, globals);

  modules = props.modules || modules;
  theme = props.theme || theme;

  init({ modules, theme, utils, options, callback });

  const Tag = props.element || (typeof Provider !== 'undefined') ? Provider : 'div';
  const render = props.render || props.children;

  return (
    <Tag theme={theme} utils={utils}>
      { typeof render === 'function' ? render({ theme, utils }) : render }
    </Tag>
  );
}