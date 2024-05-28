import { r as reactExports, R as React } from "./index-D_CyF5zi.js";
class ScrollPageTransfrom {
  constructor({
    content,
    element
  }) {
    this.theScrollWrapper = document.querySelector(content) || window;
    const state = {
      current: 0,
      target: 0,
      ease: 0.075,
      rafId: null,
      rafActive: false,
      elementQuery: document.querySelector(element),
      updateScroll: this.updateScroll.bind(this),
      updateAnimation: this.updateAnimation.bind(this)
    };
    for (let key in state) {
      this[key] = state[key];
    }
    this.init();
  }
  init() {
    const containerHeight = this.elementQuery.getBoundingClientRect().height;
    this.elementQuery.parentNode.style.height = containerHeight + "px";
    this.startAnimation();
    this.theScrollWrapper.addEventListener("scroll", this.updateScroll);
    this.theScrollWrapper.addEventListener("resize", this.updateScroll);
  }
  updateScroll() {
    this.target = this.theScrollWrapper === window ? this.theScrollWrapper.scrollY || this.theScrollWrapper.pageYOffset : this.theScrollWrapper.scrollTop;
    this.startAnimation();
  }
  startAnimation() {
    if (!this.rafActive) {
      this.rafActive = true;
      this.rafId = requestAnimationFrame(this.updateAnimation);
    }
  }
  updateAnimation() {
    let diff = this.target - this.current;
    let delta = Math.abs(diff) < 0.1 ? 0 : diff * this.ease;
    if (delta) {
      this.current += delta;
      this.current = parseFloat(this.current.toFixed(2));
      this.rafId = requestAnimationFrame(this.updateAnimation);
    } else {
      this.current = this.target;
      this.rafActive = false;
      cancelAnimationFrame(this.rafId);
    }
    this.elementQuery.style.transform = "translate3d(0," + -this.current + "px,0)";
  }
}
const box = "_box_1qct8_1";
const wrapper = "_wrapper_1qct8_8";
const scrollWarpper = "_scrollWarpper_1qct8_13";
const text = "_text_1qct8_20";
const style = {
  box,
  wrapper,
  scrollWarpper,
  text
};
function Index() {
  reactExports.useEffect(() => {
    new ScrollPageTransfrom({
      element: "." + style.scrollWarpper,
      content: "." + style.box
    });
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    className: style.box
  }, /* @__PURE__ */ React.createElement("div", {
    className: style.wrapper
  }, /* @__PURE__ */ React.createElement("div", {
    className: style.scrollWarpper
  }, /* @__PURE__ */ React.createElement("div", {
    className: style.text
  }, "从去年起，仿佛听得有人说我是仇猫的。那根据自然是在我的那一篇《兔和猫》；这是自画招供，当然无话可说，——但倒也毫不介意。一到今年，我可很有点担心了。我是常不免于弄弄笔墨的，写了下来，印了出去，对于有些人似乎总是搔着痒处的时候少，碰着痛处的时候多。万一不谨，甚而至于得罪了名人或名教授，或者更甚而至于得罪了“负有指导青年责任的前辈”之流，可就危险已极。为什么呢？因为这些大脚色是“不好惹”的。怎地“不好惹”呢？就是怕要浑身发热之后，做一封信登在报纸上，广告道：“看哪！狗不是仇猫的么？鲁迅先生却自己承认是仇猫的，而他还说要打‘落水狗’！”①这“逻辑”的奥义，即在用我的话，来证明我倒是狗，于是而凡有言说，全都根本推翻，即使我说二二得四，三三见九，也没有一字不错。这些既然都错，则绅士口头的二二得七，三三见千等等，自然就不错了。", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "我于是就间或留心着查考它们成仇的“动机”。这也并非敢妄学现下的学者以动机来褒贬作品的那些时髦，不过想给自己预先洗刷洗刷。据我想，这在动物心理学家，是用不着费什么力气的，可惜我没有这学问。后来，在覃哈特博士（Dr.O.Dahmhardt）的《自然史底国民童话》里，总算发现了那原因了。据说，是这么一回事：动物们因为要商议要事，开了一个会议，鸟、鱼、兽都齐集了，单是缺了象。大家议定，派伙计去迎接它，拈到了当这差使的阄的就是狗。“我怎么找到那象呢？我没有见过它，也和它不认识。”它问。“那容易，”大众说，“它是驼背的。”狗去了，遇见一匹猫，立刻弓起脊梁来，它便招待，同行，将弓着脊梁的猫介绍给大家道：“象在这里！”但是大家都嗤笑它了。从此以后，狗和猫便成了仇家。", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "日尔曼人走出森林虽然还不很久，学术文艺却已经很可观，便是书籍的装潢，玩具的工致，也无不令人心爱。独有这一篇童话却实在不漂亮；结怨也结得没有意思。猫的弓起脊梁，并不是希图冒充，故意摆架子的，其咎却在狗的自己没眼力。然而原因也总可以算作一个原因。我的仇猫，是和这大大两样的。", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "其实人禽之辨，本不必这样严。在动物界，虽然并不如古人所幻想的那样舒适自由，可是噜苏做作的事总比人间少。它们适性任情，对就对，错就错，不说一句分辩话。虫蛆也许是不干净的，但它们并没有自命清高；鸷禽猛兽以较弱的动物为饵，不妨说是凶残的罢，但它们从来就没有竖过“公理”“正义”的旗子，使牺牲者直到被吃的时候为止，还是一味佩服赞叹它们。人呢，能直立了，自然是一大进步；能说话了，自然又是一大进步；能写字作文了，自然又是一大进步。然而也就堕落，因为那时也开始了说空话。说空话尚无不可，甚至于连自己也不知道说着违心之论，则对于只能嗥叫的动物，实在免不得“颜厚有忸怩”。假使真有一位一视同仁的造物主，高高在上，那么，对于人类的这些小聪明，也许倒以为多事，正如我们在万生园里，看见猴子翻筋斗，母象请安，虽然往往破颜一笑，但同时也觉得不舒服，甚至于感到悲哀，以为这些多余的聪明，倒不如没有的好罢。然而，既经为人，便也只好“党同伐异”，学着人们的说话，随俗来谈一谈，——辩一辩了。", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "现在说起我仇猫的原因来，自己觉得是理由充足，而且光明正大的。一、它的性情就和别的猛兽不同，凡捕食雀、鼠，总不肯一口咬死，定要尽情玩弄，放走，又捉住，捉住，又放走，直待自己玩厌了，这才吃下去，颇与人们的幸灾乐祸，慢慢地折磨弱者的坏脾气相同。二、它不是和狮虎同族的么？可是有这么一副媚态！但这也许是限于天分之故罢，假使它的身材比现在大十倍，那就真不知道它所取的是怎么一种态度。然而，这些口实，仿佛又是现在提起笔来的时候添出来的，虽然也象是当时涌上心来的理由。要说得可靠一点，或者倒不如说不过因为它们配合时候的嗥叫，手续竟有这么繁重，闹得别人心烦，尤其是夜间要看书，睡觉的时候。当这些时候，我便要用长竹竿去攻击它们。狗们在大道上配合时，常有闲汉拿了木棍痛打；我曾见大勃吕该尔（P.Bruegeld.A）的一张铜版画AllegoriederWollust上，也画着这回事，可见这样的举动，是中外古今一致的。自从那执拗的奥国学者弗罗特（S.Freud）提倡了精神分析说——psychoanalysis，听说章士钊先生是译作“心解”的，虽然简古，可是实在难解得很——以来，我们的名人名教授也颇有隐隐约约，检来应用的了，这些事便不免又要归宿到性欲上去。打狗的事我不管，至于我的打猫，却只因为它们嚷嚷，此外并无恶意，我自信我的嫉妒心还没有这么博大，当现下“动辄获咎”之秋，这是不可不预先声明的。例如人们当配合之前，也很有些手续，新的是写情书，少则一束，多则一捆；旧的是什么“问名”“纳采”，磕头作揖，去年海昌蒋氏在北京举行婚礼，拜来拜去，就十足拜了三天，还印有一本红面子的《婚礼节文》，《序论》里大发议论道：“平心论之，既名为礼，当必繁重。专图简易，何用礼为？……然则世之有志于礼者，可以兴矣！不可退居于礼所不下之庶人矣！”然而我毫不生气，这是因为无须我到场；因此也可见我的仇猫，理由实在简简单单，只为了它们在我的耳朵边尽嚷的缘故。人们的各种礼式，局外人可以不见不闻，我就满不管，但如果当我正要看书或睡觉的时候，有人来勒令朗诵情书，奉陪作揖，那是为自卫起见，还要用长竹竿来抵御的。还有，平素不大交往的人，忽而寄给我一个红帖子，上面印着“为舍妹出阁”，“小儿完姻”，“敬请观礼”或“阖第光临”这些含有“阴险的暗示”的句子，使我不花钱便总觉得有些过意不去的，我也不十分高兴。", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "但是，这都是近时的话。再一回忆，我的仇猫却远在能够说出这些理由之前，也许是还在十岁上下的时候了。至今还分明记得，那原因是极其简单的：只因为它吃老鼠，——吃了我饲养着的可爱的小小的隐鼠。", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "听说西洋是不很喜欢黑猫的，不知道可确；但EdgarAllanPoe的小说里的黑猫，却实在有点骇人。日本的猫善于成精，传说中的“猫婆”，那食人的惨酷确是更可怕。中国古时候虽然曾有“猫鬼”，近来却很少听到猫的兴妖作怪，似乎古法已经失传，老实起来了。只是我在童年，总觉得它有点妖气，没有什么好感。那是一个我的幼时的夏夜，我躺在一株大桂树下的小板桌上乘凉，祖母摇着芭蕉扇坐在卓旁，给我猜谜，讲古事。忽然，桂树上沙沙地有趾爪的爬搔声，一对闪闪的眼睛在暗中随声而下，使我吃惊，也将祖母讲着的话打断，另讲猫的故事了——", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "“你知道么？猫是老虎的先生。”她说。“小孩子怎么会知道呢，猫是老虎的师父。老虎本来是什么也不会的，就投到猫的门下来。猫就教给它扑的方法，捉的方法，吃的方法，象自己的捉老鼠一样。这些教完了；老虎想，本领都学到了，谁也比不过它了，只有老师的猫还比自己强，要是杀掉猫，自己便是最强的脚色了。它打定主意，就上前去扑猫。猫是早知道它的来意的，一跳，便上了树，老虎却只能眼睁睁地在树下蹲着。它还没有将一切本领传授完，还没有教给它上树。”", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "这是侥幸的，我想，幸而老虎很性急，否则从桂树上就会爬下一匹老虎来。然而究竟很怕人，我要进屋子里睡觉去了。夜色更加黯然；桂叶瑟瑟地作响，微风也吹动了，想来草席定已微凉，躺着也不至于烦得翻来复去了。", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "几百年的老屋中的豆油灯的微光下，是老鼠跳梁的世界，飘忽地走着，吱吱地叫着，那态度往往比“名人名教授”还轩昂。猫是饲养着的，然而吃饭不管事。祖母她们虽然常恨鼠子们啮破了箱柜，偷吃了东西，我却以为这也算不得什么大罪，也和我不相干，况且这类坏事大概是大个子的老鼠做的，决不能诬陷到我所爱的小鼠身上去。这类小鼠大抵在地上走动，只有拇指那么大，也不很畏惧人，我们那里叫它“隐鼠”，与专住在屋上的伟大者是两种。我的床前就帖着两张花纸，一是“八戒招赘”，满纸长嘴大耳，我以为不甚雅观；别的一张“老鼠成亲”却可爱，自新郎、新妇以至傧相、宾客、执事，没有一个不是尖腮细腿，象煞读书人的，但穿的都是红衫绿裤。我想，能举办这样大仪式的，一定只有我所喜欢的那些隐鼠。现在是粗俗了，在路上遇见人类的迎娶仪仗，也不过当作性交的广告看，不甚留心；但那时的想看“老鼠成亲”的仪式，却极其神往，即使象海昌蒋氏似的连拜三夜，怕也未必会看得心烦。正月十四的夜，是我不肯轻易便睡，等候它们的仪仗从床下出来的夜。然而仍然只看见几个光着身子的隐鼠在地面游行，不象正在办着喜事。直到我敖不住了，怏怏睡去，一睁眼却已经天明，到了灯节了。也许鼠族的婚仪，不但不分请帖，来收罗贺礼，虽是真的“观礼”，也绝对不欢迎的罢，我想，这是它们向来的习惯，无法抗议的。", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "老鼠的大敌其实并不是猫。春后，你听到它“咋！咋咋咋咋！”地叫着，大家称为“老鼠数铜钱”的，便知道它的可怕的屠伯已经光临了。这声音是表现绝望的惊恐的，虽然遇见猫，还不至于这样叫。猫自然也可怕，但老鼠只要窜进一个小洞去，它也就奈何不得，逃命的机会还很多。独有那可怕的屠伯——蛇，身体是细长的，圆径和鼠子差不多，凡鼠子能到的地方，它也能到，追逐的时间也格外长，而且万难幸免，当“数钱”的时候，大概是已经没有第二步办法的了。", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "有一回，我就听得一间空屋里有着这种“数钱”的声音，推门进去，一条蛇伏在横梁上，看地上，躺着一匹隐鼠，口角流血，但两胁还是一起一落的。取来给躺在一个纸盒子里，大半天，竟醒过来了，渐渐地能够饮食，行走，到第二日，似乎就复了原，但是不逃走。放在地上，也时时跑到人面前来，而且缘腿而上，一直爬到膝髁。给放在饭桌上，便检吃些菜渣，舔舔碗沿；放在我的书桌上，则从容地游行，看见砚台便舔吃了研着的墨汁。这使我非常惊喜了。我听父亲说过的，中国有一种墨猴，只有拇指一般大，全身的毛是漆黑而且发亮的。它睡在笔筒里，一听到磨墨，便跳出来，等着，等到人写完字，套上笔，就舔尽了砚上的余墨，仍旧跳进笔筒里去了。我就极愿意有这样的一个墨猴，可是得不到；问那里有，那里买的呢，谁也不知道。“慰情聊胜无”，这隐鼠总可以算是我的墨猴了罢，虽然它舔吃墨汁，并不一定肯等到我写完字。", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "现在已经记不分明，这样地大约有一两月；有一天，我忽然感到寂寞了，真所谓“若有所失”。我的隐鼠，是常在眼前游行的，或桌上，或地上。而这一日却大半天没有见，大家吃午饭了，也不见它走出来，平时，是一定出现的。我再等着，再等它一半天，然而仍然没有见。", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "长妈妈，一个一向带领着我的女工，也许是以为我等得太苦了罢，轻轻地来告诉我一句话。这即刻使我愤怒而且悲哀，决心和猫们为敌。她说：隐鼠是昨天晚上被猫吃去了！", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "当我失掉了所爱的，心中有着空虚时，我要充填以报仇的恶念！", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "我的报仇，就从家里饲养着的一匹花猫起手，逐渐推广，至于凡所遇见的诸猫。最先不过是追赶，袭击；后来却愈加巧妙了，能飞石击中它们的头，或诱入空屋里面，打得它垂头丧气。这作战继续得颇长久，此后似乎猫都不来近我了。但对于它们纵使怎样战胜，大约也算不得一个英雄；况且中国毕生和猫打仗的人也未必多，所以一切韬略、战绩，还是全部省略了罢。", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "但许多天之后，也许是已经经过了大半年，我竟偶然得到一个意外的消息：那隐鼠其实并非被猫所害，倒是它缘着长妈妈的腿要爬上去，被她一脚踏死了。", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "这确是先前所没有料想到的。现在我已经记不清当时是怎样一个感想，但和猫的感情却终于没有融和；到了北京，还因为它伤害了兔的儿女们，便旧隙夹新嫌，使出更辣的辣手。“仇猫”的话柄，也从此传扬开来。然而在现在，这些早已是过去的事了，我已经改变态度，对猫颇为客气，倘其万不得已，则赶走而已，决不打伤它们，更何况杀害。这是我近几年的进步。经验既多，一旦大悟，知道猫的偷鱼肉，拖小鸡，深夜大叫，人们自然十之九是憎恶的，而这憎恶是在猫身上。假如我出而为人们驱除这憎恶，打伤或杀害了它，它便立刻变为可怜，那憎恶倒移在我身上了。所以，目下的办法，是凡遇猫们捣乱，至于有人讨厌时，我便站出去，在门口大声叱曰：“嘘！滚！”小小平静，即回书房，这样，就长保着御侮保家的资格。其实这方法，中国的官兵就常在实做的，他们总不肯扫清土匪或扑灭敌人，因为这么一来，就要不被重视，甚至于因失其用处而被裁汰。我想，如果能将这方法推广应用，我大概也总可望成为所谓“指导青年”的“前辈”的罢，但现下也还未决心实践，正在研究而且推敲。"))));
}
export {
  Index as default
};
