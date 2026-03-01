import Popover from './Popover';

describe('Popover', () => {
  let anchor;

  beforeEach(() => {
    document.body.innerHTML = '';
    anchor = document.createElement('button');
    anchor.textContent = 'Click me';
    document.body.appendChild(anchor);
  });

  test('show() добавляет .popover в document.body', () => {
    const p = new Popover(anchor, { title: 'Заголовок', content: 'Текст' });
    p.show();
    expect(document.querySelector('.popover')).not.toBeNull();
  });

  test('поповер содержит правильный заголовок', () => {
    const p = new Popover(anchor, { title: 'Мой заголовок', content: 'Текст' });
    p.show();
    expect(document.querySelector('.popover-header').textContent).toBe('Мой заголовок');
  });

  test('поповер содержит правильный текст', () => {
    const p = new Popover(anchor, { title: 'Заголовок', content: 'Мой текст' });
    p.show();
    expect(document.querySelector('.popover-body').textContent).toBe('Мой текст');
  });

  test('hide() удаляет .popover из DOM', () => {
    const p = new Popover(anchor, { title: 'Заголовок', content: 'Текст' });
    p.show();
    p.hide();
    expect(document.querySelector('.popover')).toBeNull();
  });

  test('hide() не бросает ошибку если поповер не показан', () => {
    const p = new Popover(anchor, { title: 'Заголовок', content: 'Текст' });
    expect(() => p.hide()).not.toThrow();
  });

  test('toggle() показывает поповер при первом вызове', () => {
    const p = new Popover(anchor, { title: 'Заголовок', content: 'Текст' });
    p.toggle();
    expect(document.querySelector('.popover')).not.toBeNull();
  });

  test('toggle() скрывает поповер при втором вызове', () => {
    const p = new Popover(anchor, { title: 'Заголовок', content: 'Текст' });
    p.toggle();
    p.toggle();
    expect(document.querySelector('.popover')).toBeNull();
  });
});
