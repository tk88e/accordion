import {Singleton} from "./Singleton";

/**
 *
 */
export class Accordion extends Singleton<Accordion> {
  /**
   * Target attribute name
   * @var string
   */
  private static _attr: string = "control-id";

  /**
   *
   * @var string
   */
  private static _control: string = "control-visible";

  public static Activate(): void {
    this.getInstance(Accordion).activate();
  }

  public static Deactivate(): void {
    this.getInstance(Accordion).deactivate();
  }

  /**
   * Activate block element
   */
  protected activate(): void {
    window.addEventListener<"click">("click", this._clickEventListener);
  }

  /**
   * Deactivate block element
   */
  protected deactivate(): void {
    window.removeEventListener<"click">("click", this._clickEventListener);
  }

  /**
   * Click event listener
   * @param this
   * @param ev
   */
  protected _clickEventListener(event: Event): void {
    if (null === event || !(event.target instanceof HTMLElement)) {
      return;
    }

    const digIdentifier: string | null = event.target?.getAttribute(
      Accordion._attr
    );

    if (!digIdentifier) {
      return;
    }

    const targetElement: HTMLElement | null =
      document.getElementById(digIdentifier);
    if (!targetElement) {
      return;
    }

    Accordion._toggle(targetElement);
  }

  /**
   *
   * @param element
   * @return Promise<void>
   */
  protected static async _contract(element: HTMLElement): Promise<void> {
    const identifier: string = "false";
    if (identifier === element.getAttribute(Accordion._control)) {
      return;
    }

    // element.style.height = window.getComputedStyle(element).height;
    element.setAttribute(Accordion._control, identifier);
  }

  /**
   *
   * @param element
   * @return Promise<void>
   */
  protected static async _expand(element: HTMLElement): Promise<void> {
    const identifier: string = "true";

    if (identifier === element.getAttribute(Accordion._control)) {
      return;
    }

    element.setAttribute(Accordion._control, identifier);
  }

  /**
   *
   * @param element
   * @return Promise<void>
   */
  protected static async _toggle(element: HTMLElement): Promise<void> {
    const behaivor = element
      .getAttribute(Accordion._control)
      ?.toLocaleLowerCase();

    switch (behaivor) {
      case "true":
        await Accordion._contract(element);
        break;
      case "false":
        await Accordion._expand(element);
        break;
      default:
        break;
    }

    return;
  }
}
