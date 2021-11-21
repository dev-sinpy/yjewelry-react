export default function Sidenavbar() {
  return (
    <div className="mobilePanelConatiner flex-col" id="mobilePanelConatiner">
      <div className="borderBottom flex items-center">
        <div className="borderRight w-100 ml-20">
          <div className="cursorPointer flex items-center">
            <svg
              className="navIcon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              fill="none"
            >
              <use xlinkHref="assets/nb.svg#profile"></use>
            </svg>
            <p className=""></p>
          </div>
        </div>
        <div className="w-100 ml-20">
          <div className="cursorPointer flex items-center">
            <svg
              className="navIcon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              fill="none"
            >
              <use xlinkHref="assets/nb.svg#wishlist"></use>
            </svg>
            <p className="">Your wishlist</p>
          </div>
        </div>
        <div>
          <div className="borderBottom flex space-between items-center">
            <div className="ml-20 flex items-center">
              <svg
                className="navIcon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                fill="none"
              >
                <use xlinkHref="assets/nb.svg#search"></use>
              </svg>
              <p className="">Tap to search on the website</p>
            </div>
          </div>

          <div className="promotion-banner">
            <img
              className="promotion-image"
              src="promotionBanner.PromotionImageUrl"
            />
            <button className="btn-light btn-cta"></button>
          </div>

          <div className="menus">
            <div>Charms</div>
            <img
              className="openMore"
              src="https://files.y.jewelry/assets/img/nav/more.png"
              alt="more"
            />
          </div>
          <div className="menus flex space-between items-center">
            <div>Chains</div>
            <img
              className="openMore"
              src="https://files.y.jewelry/assets/img/nav/more.png"
              alt="more"
            />
          </div>
          <div className="menus flex space-between items-center">
            <div>Sets</div>
            <img
              className="openMore"
              src="https://files.y.jewelry/assets/img/nav/more.png"
              alt="more"
            />
          </div>
          <div className="menus flex space-between items-center">
            <div>
              <a>The art of giving</a>
            </div>
          </div>
          <div className="menus flex space-between items-center">
            <div>
              <a>Create your own sets</a>
            </div>
          </div>
          <div className="menus flex space-between items-center">
            <div>
              <a>Tell me Y</a>
            </div>
          </div>
          <div className="menus flex space-between items-center">
            <div>
              <a>Chain of care</a>
            </div>
          </div>
          <div className="menus flex space-between items-center">
            <div>Lookbooks</div>
            <img
              className="openMore"
              src="https://files.y.jewelry/assets/img/nav/more.png"
              alt="more"
            />
          </div>
          <div className="menus flex space-between items-center">
            <div>
              <a>5 things about us</a>
            </div>
          </div>
        </div>

        <div className="menus active flex space-between items-center">
          <img
            className="openMore"
            src="https://files.y.jewelry/assets/img/nav/less.png"
            alt="less"
          />
          <div>Sets</div>
          <div className="openMore"></div>
        </div>
        <div className="subMenus flex space-between items-center">
          <div>
            <a>New in</a>
          </div>
        </div>
        <div className="subMenus flex space-between items-center">
          <div>All</div>
        </div>
        <div className="subMenus flex space-between items-center">
          <div>
            <a></a>
          </div>
        </div>

        <div>
          <div className="menus active flex space-between items-center">
            <img
              className="openMore"
              src="https://files.y.jewelry/assets/img/nav/less.png"
              alt="less"
            />
            <div>Charms</div>
            <div className="openMore"></div>
          </div>
          <div className="subMenus flex space-between items-center">
            <div>
              <a>New in</a>
            </div>
          </div>
          <div className="subMenus flex space-between items-center">
            <div>All</div>
          </div>
          <div className="subMenus flex space-between items-center">
            <div>
              <a></a>
            </div>
          </div>
        </div>

        <div>
          <div className="menus active flex space-between items-center">
            <img
              className="openMore"
              src="https://files.y.jewelry/assets/img/nav/less.png"
              alt="less"
            />
            <div>Chains</div>
            <div className="openMore"></div>
          </div>
          <div className="subMenus flex space-between items-center">
            <div>
              <a>New in</a>
            </div>
          </div>
          <div className="subMenus flex space-between items-center">
            <div>All</div>
          </div>
          <div className="subMenus flex space-between items-center">
            <div>
              <a></a>
            </div>
          </div>
        </div>

        <div className="menus active flex space-between items-center">
          <img
            className="openMore"
            src="https://files.y.jewelry/assets/img/nav/less.png"
            alt="less"
          />
          <div>Lookbooks</div>
          <div className="openMore"></div>
        </div>
        <div className="subMenus flex space-between items-center">
          <div>
            <a>The Dainty Ones</a>
          </div>
        </div>
        <div className="subMenus flex space-between items-center">
          <div>
            <a>Cloud 9</a>
          </div>
        </div>
        <div className="subMenus flex space-between items-center">
          <div>
            <a>We are all magic</a>
          </div>
        </div>
        <div className="subMenus flex space-between items-center">
          <div>
            <a>Hello you</a>
          </div>
        </div>
        <div className="subMenus flex space-between items-center">
          <div>
            <a>Souvenirs from Europe</a>
          </div>
        </div>
        <div className="subMenus flex space-between items-center">
          <div>
            <a>Ibiza vacation</a>
          </div>
        </div>
        <div className="subMenus flex space-between items-center">
          <div>
            <a>A day in Paris</a>
          </div>
        </div>
      </div>
    </div>
  );
}
