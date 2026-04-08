from playwright.sync_api import sync_playwright

def verify_site():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # 1. Verify Home Page
        print("Navigating to Home Page...")
        page.goto("http://localhost:3000")
        page.wait_for_load_state("networkidle")

        # Take full page screenshot
        print("Taking Home Page Screenshot...")
        page.screenshot(path="verification_home.png", full_page=True)

        # 2. Verify Menu Page
        print("Navigating to Menu Page...")
        # Find the link to Menu (which is /features in config)
        # config: { title: "Menu", href: "/features" }
        page.click("text=Menu")
        page.wait_for_load_state("networkidle")

        print("Taking Menu Page Screenshot...")
        page.screenshot(path="verification_menu.png", full_page=True)

        browser.close()

if __name__ == "__main__":
    verify_site()
