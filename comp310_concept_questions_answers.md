# COMP310 Concept Questions and Answers

Source PDFs: COMP310 Exam 2016-17-1, Model Solutions 2016-17, COMP310 Exam 2017-18-1, Model Solutions 2017-18.

## 2016/17

- EN: Q1(a)(i) What is `brf(B, rho)` in a BDI agent? A: It is the belief revision function; it updates the agent's beliefs using the latest percept and is related to updating the agent's internal state.
- 中文: Q1(a)(i) BDI 智能体中的 `brf(B, rho)` 是什么？答：它是信念修正函数，根据新的感知更新智能体的信念，相当于更新内部状态。

- EN: Q1(a)(ii) What is `options(B, I)`? A: It generates possible desires/options from current beliefs and intentions; it is the option-generation part of deliberation.
- 中文: Q1(a)(ii) `options(B, I)` 是什么？答：它根据当前信念和意图生成可能的欲望/选项，是审议过程中的“选项生成”步骤。

- EN: Q1(a)(iii) What is `filter(B, D, I)`? A: It selects the best options from competing desires and turns the selected options into intentions.
- 中文: Q1(a)(iii) `filter(B, D, I)` 是什么？答：它从多个竞争选项中选择最合适的选项，并把它们确定为智能体承诺执行的意图。

- EN: Q1(a)(iv) What is `plan(B, I)`? A: It performs means-end reasoning by constructing an action sequence that should achieve intention `I` from beliefs `B`.
- 中文: Q1(a)(iv) `plan(B, I)` 是什么？答：它执行手段-目的推理，生成一串动作计划，使智能体能从当前信念状态实现意图 `I`。

- EN: Q1(a)(v) What is `sound(pi, I, B)`? A: It checks whether the current plan `pi` is still a correct plan for the intention and beliefs.
- 中文: Q1(a)(v) `sound(pi, I, B)` 是什么？答：它检查当前计划 `pi` 在现有信念下是否仍然能正确实现意图。

- EN: Q1(b)(i) Why can the inner BDI loop stop when `empty(pi)` is true but the intention is not achieved or impossible? A: The plan has no actions left, even though the goal has not yet been achieved and is still believed possible.
- 中文: Q1(b)(i) 为什么 `empty(pi)` 为真但意图既未成功也未不可能时循环会停止？答：计划中的动作已经用完，但目标还没达成，并且仍被认为可能达成。

- EN: Q1(b)(ii) Why can the loop stop when `impossible(I, B)` is true? A: The agent now believes the intention cannot be achieved, so continuing the remaining actions is irrational.
- 中文: Q1(b)(ii) 为什么 `impossible(I, B)` 为真时循环会停止？答：智能体现在相信该意图无法实现，因此继续执行剩余计划不再理性。

- EN: Q1(b)(iii) Why can the loop stop when `succeeded(I, B)` is true while actions remain? A: The intention has already been achieved, so the unused plan steps are no longer needed.
- 中文: Q1(b)(iii) 为什么 `succeeded(I, B)` 为真但计划仍有动作时循环会停止？答：意图已经实现，剩余动作不再需要执行。

- EN: Q1(c)(i) What is `see: E -> Per`? A: It observes the environment and converts the current environmental state into a percept representation.
- 中文: Q1(c)(i) `see: E -> Per` 是什么？答：它观察环境，并把当前环境状态转换成智能体可处理的感知表示。

- EN: Q1(c)(ii) What is `action: I -> Ac`? A: It maps the agent's intention to an action that moves the agent toward achieving that intention.
- 中文: Q1(c)(ii) `action: I -> Ac` 是什么？答：它把智能体的意图映射为一个行动，使智能体朝实现该意图前进。

- EN: Q1(c)(iii) What is `next: I x Per -> I`? A: It updates the agent's internal state or intention using the current intention and a new percept.
- 中文: Q1(c)(iii) `next: I x Per -> I` 是什么？答：它根据当前意图和新的感知更新智能体的内部状态或意图。

- EN: Q2(a) What subsumption rules support Mars rock-gathering agents? A: Rules include avoiding obstacles, dropping samples at base, travelling up the base gradient when carrying a sample, picking up detected samples, and random exploration when nothing higher priority applies.
- 中文: Q2(a) 火星采石智能体使用哪些 subsumption 规则？答：包括检测障碍物就转向、带样本到基地就放下、带样本且不在基地就沿基地梯度返回、检测到样本就拾取、没有更高优先级任务时随机探索。

- EN: Q2(b) How do radioactive particles support stigmergy? A: Agents leave a trail while returning from a sample cluster; other agents follow the trail to find more samples, and the trail fades as crumbs are picked up when the cluster is exhausted.
- 中文: Q2(b) 放射性粒子如何支持 stigmergy（环境中的隐式通信）？答：发现样本簇的智能体返回基地时留下轨迹，其他智能体沿轨迹找到样本；样本耗尽后轨迹会因粒子被捡起而逐渐消失。

- EN: Q3(a) What is an upper ontology? A: It defines very general categories such as living things, non-living things, fluents, and endurants.
- 中文: Q3(a) 什么是上层本体？答：它定义最一般的类别，例如生物、非生物、流变对象、持存对象等。

- EN: Q3(b) What is a domain ontology? A: It defines concepts for a specific domain, often reusing an upper ontology; for example, medical concepts for medical applications.
- 中文: Q3(b) 什么是领域本体？答：它定义某一特定领域中的概念，通常复用上层本体，例如医学应用中的医学术语。

- EN: Q3(c) What is an application ontology? A: It defines concepts needed by one specific application, usually less reusable outside that application.
- 中文: Q3(c) 什么是应用本体？答：它定义某个具体应用需要的概念，通常只在该应用内部有用，复用性较低。

- EN: Q3(d) What are representative speech acts? A: They inform the hearer of a fact, such as saying "it is raining."
- 中文: Q3(d) 什么是陈述类言语行为（representatives）？答：用于告知事实，例如“正在下雨”。

- EN: Q3(e) What are directive speech acts? A: They ask or direct another agent to do something, such as "please make tea."
- 中文: Q3(e) 什么是指令类言语行为（directives）？答：用于要求或指示另一个智能体做某事，例如“请泡茶”。

- EN: Q3(f) What are commissive speech acts? A: They commit the speaker to some future action, such as "I promise to make tea."
- 中文: Q3(f) 什么是承诺类言语行为（commissives）？答：说话者承诺将来执行某事，例如“我承诺会泡茶”。

- EN: Q3(g) What is the grounded extension in the given abstract argument graph? A: It is the empty set because every argument is attacked, so no argument can initially be accepted as `IN`.
- 中文: Q3(g) 给定抽象论证图的 grounded extension 是什么？答：为空集，因为每个论证都受到攻击，因此没有论证能先被确定为 `IN`。

- EN: Q4(a) What is Borda count? A: With `k` outcomes, first choice gets `k-1` points, second gets `k-2`, and so on; the highest total wins. In the exam schedule, Italian wins with 30 points.
- 中文: Q4(a) 什么是 Borda 计数？答：若有 `k` 个结果，第一名得 `k-1` 分，第二名得 `k-2` 分，依此类推；总分最高者胜。本题中 Italian 以 30 分获胜。

- EN: Q4(b) What is alternative vote? A: Count first choices; if no candidate has a majority, eliminate the fewest-vote candidate and transfer those ballots until someone reaches a majority. In the exam schedule, Mexican wins with 9 votes.
- 中文: Q4(b) 什么是 alternative vote？答：先数第一选择；若无人过半，就淘汰得票最少者并转移其选票，直到有人过半。本题中 Mexican 以 9 票获胜。

- EN: Q4(c) What are the five rules of the Monotonic Concession Protocol? A: Agents simultaneously propose deals in round 1; agreement occurs if one accepts the other's proposal as at least as good as its own; otherwise another simultaneous round occurs; later offers may not be less preferred by the opponent than the previous offer; if neither concedes in a round, negotiation ends with the conflict deal.
- 中文: Q4(c) 单调让步协议的五条规则是什么？答：第一轮双方同时提议；若一方认为对方提议至少和自己的提议一样好则达成协议；否则进入下一轮同时提议；后续提议不能比上一轮更不利于对方；若某轮双方都不让步，则以冲突结果结束。

- EN: Q4(d) In Zeuthen strategy, who should concede? A: The agent least willing to risk conflict should concede; this is usually the agent with more to lose if negotiation fails.
- 中文: Q4(d) Zeuthen 策略中谁应该让步？答：最不愿冒冲突风险的一方应该让步，通常是谈判失败时损失更大的一方。

- EN: Q4(e) In Zeuthen strategy, how much should an agent concede? A: It should concede just enough to change the balance of risk, avoiding both repeated tiny concessions and wasted utility.
- 中文: Q4(e) Zeuthen 策略中应该让步多少？答：只让步到足以改变风险平衡即可，避免让步太少导致反复让步，也避免让步太多浪费效用。

- EN: Q5(a) What is the Shapley value? A: It is the average marginal contribution of an agent over all possible coalition-joining orders; for the 2016/17 game, `phi_a = 46`, `phi_b = 37`, and `phi_c = 37`.
- 中文: Q5(a) 什么是 Shapley 值？答：它是一个智能体在所有可能加入联盟顺序中的平均边际贡献；在 2016/17 题中，`phi_a = 46`，`phi_b = 37`，`phi_c = 37`。

- EN: Q5(b) What is a pure strategy Nash equilibrium? A: A strategy profile where no agent can improve by unilaterally changing strategy, assuming the others keep theirs fixed.
- 中文: Q5(b) 什么是纯策略纳什均衡？答：在其他参与者策略不变的前提下，没有任何一方能通过单方面改变策略获得更好结果的策略组合。

- EN: Q5(b) What are the pure strategy Nash equilibria in Chicken? A: `(Cooperate, Defect)` and `(Defect, Cooperate)`; in each case neither player has an incentive to deviate alone.
- 中文: Q5(b) Chicken 游戏中的纯策略纳什均衡是什么？答：`(合作, 背叛)` 和 `(背叛, 合作)`；在这两个结果中，任何一方单独改变策略都不会更好。

## 2017/18

- EN: Q1(a) What is a predicate task specification? A: It maps each run to a Boolean utility, `Psi: R -> {0,1}`, where 1 means the task succeeds and 0 means it fails.
- 中文: Q1(a) 什么是谓词任务规范？答：它把每条运行映射到布尔效用 `Psi: R -> {0,1}`，其中 1 表示任务成功，0 表示失败。

- EN: Q1(b) What is an achievement task? A: It is defined by a set of good goal states `G`; the agent succeeds if it can force the environment into at least one state in `G`.
- 中文: Q1(b) 什么是达成型任务？答：它由一组好的目标状态 `G` 定义；如果智能体能保证环境进入 `G` 中至少一个状态，就算成功。

- EN: Q1(c) What is a maintenance goal? A: It is defined by a set of bad states `B`; the agent succeeds by ensuring none of those bad states ever occurs.
- 中文: Q1(c) 什么是维持型目标？答：它由一组坏状态 `B` 定义；智能体若能保证这些坏状态永不发生，就算成功。

- EN: Q1(e) Which run satisfies `RE = {e6}` in the given environment? A: The satisfying run is `e0, alpha0, e2, alpha2, e4, alpha3, e6`.
- 中文: Q1(e) 在给定环境中哪条运行满足 `RE = {e6}`？答：满足的运行是 `e0, alpha0, e2, alpha2, e4, alpha3, e6`。

- EN: Q1(f) How is expected utility used to compare agents? A: Sum each run's utility multiplied by its probability; in the exam, `EU(Ag1)=10.58`, `EU(Ag2)=9.44`, so `Ag1` is optimal.
- 中文: Q1(f) 如何用期望效用比较智能体？答：把每条运行的效用乘以其概率后求和；本题中 `EU(Ag1)=10.58`，`EU(Ag2)=9.44`，所以 `Ag1` 最优。

- EN: Q2(a) What is deliberation in BDI practical reasoning? A: It is deciding what to do by generating possible options and filtering them into intentions.
- 中文: Q2(a) BDI 实践推理中的 deliberation 是什么？答：它是“决定做什么”的过程，包括生成可能选项，并筛选成智能体承诺的意图。

- EN: Q2(a) What is means-end reasoning? A: It is deciding how to achieve an intention by planning a sequence of actions.
- 中文: Q2(a) 什么是 means-end reasoning（手段-目的推理）？答：它是“决定如何实现意图”的过程，即生成实现目标的动作计划。

- EN: Q2(b) How does the BDI loop maintain commitment to intentions? A: It keeps executing while the intention is possible, not yet achieved, and the plan still has actions; it only reconsiders intentions when the `reconsider` heuristic says deliberation is worthwhile.
- 中文: Q2(b) BDI 循环如何保持对意图的承诺？答：只要意图仍可能、尚未达成、计划仍有动作，它就继续执行；只有当 `reconsider` 启发式判断重新审议值得时，才重新考虑意图。

- EN: Q2(c) What is the transduction problem? A: It is the problem of converting raw sensor data such as video, audio, speech, or proximity data into an accurate symbolic description quickly enough to be useful.
- 中文: Q2(c) 什么是 transduction problem？答：它是把视频、音频、语音、距离等原始传感器数据及时转换为准确符号描述的问题。

- EN: Q2(d) Why does the proposed Blocksworld plan fail? A: After `Stack(B,A)`, `Swap(B,A)` fails because `OnTable(A)` is false; `Swap(D,C)` also fails because `D` is not clear.
- 中文: Q2(d) 为什么给定 Blocksworld 计划失败？答：执行 `Stack(B,A)` 后，`Swap(B,A)` 因 `OnTable(A)` 不成立而失败；`Swap(D,C)` 也因 `D` 不清空而失败。

- EN: Q2(e) What is a valid Blocksworld plan? A: One valid plan is `Unstack(A,D), Swap(D,C), Stack(B,C), Stack(A,B)`.
- 中文: Q2(e) 一个有效的 Blocksworld 计划是什么？答：一个可行计划是 `Unstack(A,D), Swap(D,C), Stack(B,C), Stack(A,B)`。

- EN: Q3(a) What is a social law in a multi-agent system? A: It is a set of constraints forbidding certain actions in certain environment states, intended to coordinate agents while preserving reachability between focal states.
- 中文: Q3(a) 多智能体系统中的 social law 是什么？答：它是一组约束，禁止智能体在某些环境状态下执行某些动作，用于协调行为，同时不应阻止焦点状态之间的可达性。

- EN: Q3(a) Give an example of a useful social law. A: In a grid world, rules such as moving left on even rows, right on odd rows, and moving up/down at specified columns can prevent collisions.
- 中文: Q3(a) 举一个有用 social law 的例子。答：在网格世界中，可规定偶数行向左、奇数行向右，并在特定列向上/向下移动，从而避免碰撞。

- EN: Q3(b) What are the pure strategy Nash equilibria in Stag Hunt? A: `(Cooperate, Cooperate)` and `(Defect, Defect)`; in each, neither player benefits from unilateral deviation.
- 中文: Q3(b) Stag Hunt 中的纯策略纳什均衡是什么？答：`(合作, 合作)` 和 `(背叛, 背叛)`；在这两个结果中，任一玩家单方面改变策略都不会更好。

- EN: Q3(c) What is a mixed strategy Nash equilibrium? A: It allows players to randomise over pure strategies; in matching pennies, each player choosing each side with probability 0.5 is a mixed equilibrium.
- 中文: Q3(c) 什么是混合策略纳什均衡？答：参与者可按概率随机选择纯策略；在 matching pennies 中，双方各以 0.5 概率选择两面就是混合均衡。

- EN: Q3(c) What is Nash's theorem? A: Every finite game has at least one Nash equilibrium in mixed strategies.
- 中文: Q3(c) Nash 定理是什么？答：每个有限博弈都至少存在一个混合策略纳什均衡。

- EN: Q4(a) How are Shapley values computed from a marginal contribution net? A: Each rule's value is shared equally among the agents in that rule; summing the shares gives each agent's value.
- 中文: Q4(a) 如何从边际贡献网络计算 Shapley 值？答：每条规则的价值由该规则中的智能体平均分享，把相关规则的份额相加就是该智能体的 Shapley 值。

- EN: Q4(a) What are the Shapley values in the 2017/18 marginal contribution net? A: `phi_a = 6`, `phi_b = 3 2/3`, `phi_c = 2 1/3`, `phi_d = 8 1/2`, and `phi_e = 1/2`.
- 中文: Q4(a) 2017/18 边际贡献网络中的 Shapley 值是多少？答：`phi_a = 6`，`phi_b = 3 2/3`，`phi_c = 2 1/3`，`phi_d = 8 1/2`，`phi_e = 1/2`。

- EN: Q4(b)(ii) What does it mean for a payoff distribution to be in the core? A: The total distribution must be feasible for the grand coalition, and no coalition or individual should receive less than it can guarantee by itself.
- 中文: Q4(b)(ii) 支付分配在 core 中是什么意思？答：总支付必须对大联盟可行，并且任何联盟或个人都不应少于其自身能够保证的价值。

- EN: Q4(b)(ii) Give core and non-core examples from the weighted graph game. A: `<10,15>` is in the core; `<4,21>` and `<20,5>` are not because one player receives less than its singleton value.
- 中文: Q4(b)(ii) 给出该加权图博弈中的 core 与非 core 例子。答：`<10,15>` 在 core 中；`<4,21>` 和 `<20,5>` 不在 core 中，因为其中一方少于自己的单人联盟价值。

- EN: Q4(c) Why is truthful bidding dominant in a Vickrey auction? A: Overbidding can make the bidder win while paying more than its true value; underbidding can make it lose an item it would profit from winning, while winning still pays the second-highest bid.
- 中文: Q4(c) 为什么 Vickrey 拍卖中真实报价是占优策略？答：报高可能导致赢得物品但支付超过真实价值而亏损；报低可能错失本可获利的物品，而赢了时支付仍由第二高价决定。

- EN: Q5(a) What is a rebuttal in deductive argumentation? A: One argument rebuts another when its conclusion or premise contradicts the other's conclusion; for example, `p2` is equivalent to `not p1`.
- 中文: Q5(a) 演绎论证中的 rebuttal 是什么？答：当一个论证的结论或前提与另一个论证的结论相矛盾时构成反驳，例如 `p2` 等价于 `not p1`。

- EN: Q5(b) What is an undercut in deductive argumentation? A: One argument undercuts another when it attacks a proposition inside the other's support set; for example, `p2` is equivalent to `not q1` for some `q1` in `S1`.
- 中文: Q5(b) 演绎论证中的 undercut 是什么？答：当一个论证攻击另一个论证支持集中的某个命题时构成削弱，例如对某个 `q1 in S1`，`p2` 等价于 `not q1`。

- EN: Q5(c) What is a conflict-free set in abstract argumentation? A: It is a set of arguments where no argument in the set attacks another argument in the same set.
- 中文: Q5(c) 抽象论证中的 conflict-free set 是什么？答：集合内部没有任何论证攻击同集合中的其他论证。

- EN: Q5(d) What is an admissible set? A: It is conflict-free and defends all of its members against attacks.
- 中文: Q5(d) 什么是 admissible set？答：它必须是无冲突的，并且能为集合中的所有论证抵御攻击。

- EN: Q5(e) What is a preferred extension? A: It is a maximal admissible set; in the exam graph, the single preferred extension is `{A, C, E}`.
- 中文: Q5(e) 什么是 preferred extension？答：它是极大的 admissible set；本题图中唯一的 preferred extension 是 `{A, C, E}`。

- EN: Q5(f) What is the JADE Agent Management System? A: The AMS manages agent names and identifiers, creates and destroys agents, and controls the platform.
- 中文: Q5(f) JADE 中的 Agent Management System 是什么？答：AMS 管理智能体名称和标识符，负责创建和销毁智能体，并控制平台。

- EN: Q5(g) What is the JADE Directory Facilitator? A: The DF is a yellow-pages service where agents register services and discover other agents by service.
- 中文: Q5(g) JADE 中的 Directory Facilitator 是什么？答：DF 类似黄页服务，智能体可注册自己的服务，也可按服务查找其他智能体。
