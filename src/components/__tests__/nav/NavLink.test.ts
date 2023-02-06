import { mount, VueWrapper } from "@vue/test-utils";
import { describe, it, expect, beforeEach } from "vitest";
import NavLink from "../../nav/NavLink.vue";

describe("NavLink", () => {
  const href = "#test";
  const text = "Test Link";

  let wrapper: VueWrapper;
  beforeEach(() => {
    wrapper = mount(NavLink, {
      props: { href },
      slots: { default: text },
    });
  });

  it("renders the link with the correct text", () => {
    expect(wrapper.text()).toEqual(text);
  });

  it("renders the link with the correct href attribute", () => {
    expect(wrapper.attributes().href).toEqual(href);
  });
});
