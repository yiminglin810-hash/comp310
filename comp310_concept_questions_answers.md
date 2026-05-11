# COMP310 Concept Questions and Answers

Source PDFs: COMP310 Exam 2016-17-1, Model Solutions 2016-17, COMP310 Exam 2017-18-1, Model Solutions 2017-18.

## 2016/17

### Q1(a)(i)
**English question:** What is `brf(B, rho)` in a BDI agent?

**中文问题：** BDI 智能体中的 `brf(B, rho)` 是什么？

**English answer:** It is the belief revision function; it updates the agent's beliefs using the latest percept and is related to updating the agent's internal state.

**中文答案：** 它是信念修正函数，根据新的感知更新智能体的信念，相当于更新内部状态。

### Q1(a)(ii)
**English question:** What is `options(B, I)`?

**中文问题：** `options(B, I)` 是什么？

**English answer:** It generates possible desires/options from current beliefs and intentions; it is the option-generation part of deliberation.

**中文答案：** 它根据当前信念和意图生成可能的欲望/选项，是审议过程中的“选项生成”步骤。

### Q1(a)(iii)
**English question:** What is `filter(B, D, I)`?

**中文问题：** `filter(B, D, I)` 是什么？

**English answer:** It selects the best options from competing desires and turns the selected options into intentions.

**中文答案：** 它从多个竞争选项中选择最合适的选项，并把它们确定为智能体承诺执行的意图。

### Q1(a)(iv)
**English question:** What is `plan(B, I)`?

**中文问题：** `plan(B, I)` 是什么？

**English answer:** It performs means-end reasoning by constructing an action sequence that should achieve intention `I` from beliefs `B`.

**中文答案：** 它执行手段-目的推理，生成一串动作计划，使智能体能从当前信念状态实现意图 `I`。

### Q1(a)(v)
**English question:** What is `sound(pi, I, B)`?

**中文问题：** `sound(pi, I, B)` 是什么？

**English answer:** It checks whether the current plan `pi` is still a correct plan for the intention and beliefs.

**中文答案：** 它检查当前计划 `pi` 在现有信念下是否仍然能正确实现意图。

### Q1(b)(i)
**English question:** Why can the inner BDI loop stop when `empty(pi)` is true but the intention is not achieved or impossible?

**中文问题：** 为什么 `empty(pi)` 为真但意图既未成功也未不可能时循环会停止？

**English answer:** The plan has no actions left, even though the goal has not yet been achieved and is still believed possible.

**中文答案：** 计划中的动作已经用完，但目标还没达成，并且仍被认为可能达成。

### Q1(b)(ii)
**English question:** Why can the loop stop when `impossible(I, B)` is true?

**中文问题：** 为什么 `impossible(I, B)` 为真时循环会停止？

**English answer:** The agent now believes the intention cannot be achieved, so continuing the remaining actions is irrational.

**中文答案：** 智能体现在相信该意图无法实现，因此继续执行剩余计划不再理性。

### Q1(b)(iii)
**English question:** Why can the loop stop when `succeeded(I, B)` is true while actions remain?

**中文问题：** 为什么 `succeeded(I, B)` 为真但计划仍有动作时循环会停止？

**English answer:** The intention has already been achieved, so the unused plan steps are no longer needed.

**中文答案：** 意图已经实现，剩余动作不再需要执行。

### Q1(c)(i)
**English question:** What is `see: E -> Per`?

**中文问题：** `see: E -> Per` 是什么？

**English answer:** It observes the environment and converts the current environmental state into a percept representation.

**中文答案：** 它观察环境，并把当前环境状态转换成智能体可处理的感知表示。

### Q1(c)(ii)
**English question:** What is `action: I -> Ac`?

**中文问题：** `action: I -> Ac` 是什么？

**English answer:** It maps the agent's intention to an action that moves the agent toward achieving that intention.

**中文答案：** 它把智能体的意图映射为一个行动，使智能体朝实现该意图前进。

### Q1(c)(iii)
**English question:** What is `next: I x Per -> I`?

**中文问题：** `next: I x Per -> I` 是什么？

**English answer:** It updates the agent's internal state or intention using the current intention and a new percept.

**中文答案：** 它根据当前意图和新的感知更新智能体的内部状态或意图。

### Q2(a)
**English question:** What subsumption rules support Mars rock-gathering agents?

**中文问题：** 火星采石智能体使用哪些 subsumption 规则？

**English answer:** Rules include avoiding obstacles, dropping samples at base, travelling up the base gradient when carrying a sample, picking up detected samples, and random exploration when nothing higher priority applies.

**中文答案：** 包括检测障碍物就转向、带样本到基地就放下、带样本且不在基地就沿基地梯度返回、检测到样本就拾取、没有更高优先级任务时随机探索。

### Q2(b)
**English question:** How do radioactive particles support stigmergy?

**中文问题：** 放射性粒子如何支持 stigmergy（环境中的隐式通信）？

**English answer:** Agents leave a trail while returning from a sample cluster; other agents follow the trail to find more samples, and the trail fades as crumbs are picked up when the cluster is exhausted.

**中文答案：** 发现样本簇的智能体返回基地时留下轨迹，其他智能体沿轨迹找到样本；样本耗尽后轨迹会因粒子被捡起而逐渐消失。

### Q3(a)
**English question:** What is an upper ontology?

**中文问题：** 什么是上层本体？

**English answer:** It defines very general categories such as living things, non-living things, fluents, and endurants.

**中文答案：** 它定义最一般的类别，例如生物、非生物、流变对象、持存对象等。

### Q3(b)
**English question:** What is a domain ontology?

**中文问题：** 什么是领域本体？

**English answer:** It defines concepts for a specific domain, often reusing an upper ontology; for example, medical concepts for medical applications.

**中文答案：** 它定义某一特定领域中的概念，通常复用上层本体，例如医学应用中的医学术语。

### Q3(c)
**English question:** What is an application ontology?

**中文问题：** 什么是应用本体？

**English answer:** It defines concepts needed by one specific application, usually less reusable outside that application.

**中文答案：** 它定义某个具体应用需要的概念，通常只在该应用内部有用，复用性较低。

### Q3(d)
**English question:** What are representative speech acts?

**中文问题：** 什么是陈述类言语行为（representatives）？

**English answer:** They inform the hearer of a fact, such as saying "it is raining."

**中文答案：** 用于告知事实，例如“正在下雨”。

### Q3(e)
**English question:** What are directive speech acts?

**中文问题：** 什么是指令类言语行为（directives）？

**English answer:** They ask or direct another agent to do something, such as "please make tea."

**中文答案：** 用于要求或指示另一个智能体做某事，例如“请泡茶”。

### Q3(f)
**English question:** What are commissive speech acts?

**中文问题：** 什么是承诺类言语行为（commissives）？

**English answer:** They commit the speaker to some future action, such as "I promise to make tea."

**中文答案：** 说话者承诺将来执行某事，例如“我承诺会泡茶”。

### Q3(g)
**English question:** What is the grounded extension in the given abstract argument graph?

**中文问题：** 给定抽象论证图的 grounded extension 是什么？

**English answer:** It is the empty set because every argument is attacked, so no argument can initially be accepted as `IN`.

**中文答案：** 为空集，因为每个论证都受到攻击，因此没有论证能先被确定为 `IN`。

### Q4(a)
**English question:** What is Borda count?

**中文问题：** 什么是 Borda 计数？

**English answer:** With `k` outcomes, first choice gets `k-1` points, second gets `k-2`, and so on; the highest total wins. In the exam schedule, Italian wins with 30 points.

**中文答案：** 若有 `k` 个结果，第一名得 `k-1` 分，第二名得 `k-2` 分，依此类推；总分最高者胜。本题中 Italian 以 30 分获胜。

### Q4(b)
**English question:** What is alternative vote?

**中文问题：** 什么是 alternative vote？

**English answer:** Count first choices; if no candidate has a majority, eliminate the fewest-vote candidate and transfer those ballots until someone reaches a majority. In the exam schedule, Mexican wins with 9 votes.

**中文答案：** 先数第一选择；若无人过半，就淘汰得票最少者并转移其选票，直到有人过半。本题中 Mexican 以 9 票获胜。

### Q4(c)
**English question:** What are the five rules of the Monotonic Concession Protocol?

**中文问题：** 单调让步协议的五条规则是什么？

**English answer:** Agents simultaneously propose deals in round 1; agreement occurs if one accepts the other's proposal as at least as good as its own; otherwise another simultaneous round occurs; later offers may not be less preferred by the opponent than the previous offer; if neither concedes in a round, negotiation ends with the conflict deal.

**中文答案：** 第一轮双方同时提议；若一方认为对方提议至少和自己的提议一样好则达成协议；否则进入下一轮同时提议；后续提议不能比上一轮更不利于对方；若某轮双方都不让步，则以冲突结果结束。

### Q4(d)
**English question:** In Zeuthen strategy, who should concede?

**中文问题：** Zeuthen 策略中谁应该让步？

**English answer:** The agent least willing to risk conflict should concede; this is usually the agent with more to lose if negotiation fails.

**中文答案：** 最不愿冒冲突风险的一方应该让步，通常是谈判失败时损失更大的一方。

### Q4(e)
**English question:** In Zeuthen strategy, how much should an agent concede?

**中文问题：** Zeuthen 策略中应该让步多少？

**English answer:** It should concede just enough to change the balance of risk, avoiding both repeated tiny concessions and wasted utility.

**中文答案：** 只让步到足以改变风险平衡即可，避免让步太少导致反复让步，也避免让步太多浪费效用。

### Q5(a)
**English question:** What is the Shapley value?

**中文问题：** 什么是 Shapley 值？

**English answer:** It is the average marginal contribution of an agent over all possible coalition-joining orders; for the 2016/17 game, `phi_a = 46`, `phi_b = 37`, and `phi_c = 37`.

**中文答案：** 它是一个智能体在所有可能加入联盟顺序中的平均边际贡献；在 2016/17 题中，`phi_a = 46`，`phi_b = 37`，`phi_c = 37`。

### Q5(b)
**English question:** What is a pure strategy Nash equilibrium?

**中文问题：** 什么是纯策略纳什均衡？

**English answer:** A strategy profile where no agent can improve by unilaterally changing strategy, assuming the others keep theirs fixed.

**中文答案：** 在其他参与者策略不变的前提下，没有任何一方能通过单方面改变策略获得更好结果的策略组合。

### Q5(b)
**English question:** What are the pure strategy Nash equilibria in Chicken?

**中文问题：** Chicken 游戏中的纯策略纳什均衡是什么？

**English answer:** `(Cooperate, Defect)` and `(Defect, Cooperate)`; in each case neither player has an incentive to deviate alone.

**中文答案：** `(合作, 背叛)` 和 `(背叛, 合作)`；在这两个结果中，任何一方单独改变策略都不会更好。

## 2017/18

### Q1(a)
**English question:** What is a predicate task specification?

**中文问题：** 什么是谓词任务规范？

**English answer:** It maps each run to a Boolean utility, `Psi: R -> {0,1}`, where 1 means the task succeeds and 0 means it fails.

**中文答案：** 它把每条运行映射到布尔效用 `Psi: R -> {0,1}`，其中 1 表示任务成功，0 表示失败。

### Q1(b)
**English question:** What is an achievement task?

**中文问题：** 什么是达成型任务？

**English answer:** It is defined by a set of good goal states `G`; the agent succeeds if it can force the environment into at least one state in `G`.

**中文答案：** 它由一组好的目标状态 `G` 定义；如果智能体能保证环境进入 `G` 中至少一个状态，就算成功。

### Q1(c)
**English question:** What is a maintenance goal?

**中文问题：** 什么是维持型目标？

**English answer:** It is defined by a set of bad states `B`; the agent succeeds by ensuring none of those bad states ever occurs.

**中文答案：** 它由一组坏状态 `B` 定义；智能体若能保证这些坏状态永不发生，就算成功。

### Q1(e)
**English question:** Which run satisfies `RE = {e6}` in the given environment?

**中文问题：** 在给定环境中哪条运行满足 `RE = {e6}`？

**English answer:** The satisfying run is `e0, alpha0, e2, alpha2, e4, alpha3, e6`.

**中文答案：** 满足的运行是 `e0, alpha0, e2, alpha2, e4, alpha3, e6`。

### Q1(f)
**English question:** How is expected utility used to compare agents?

**中文问题：** 如何用期望效用比较智能体？

**English answer:** Sum each run's utility multiplied by its probability; in the exam, `EU(Ag1)=10.58`, `EU(Ag2)=9.44`, so `Ag1` is optimal.

**中文答案：** 把每条运行的效用乘以其概率后求和；本题中 `EU(Ag1)=10.58`，`EU(Ag2)=9.44`，所以 `Ag1` 最优。

### Q2(a)
**English question:** What is deliberation in BDI practical reasoning?

**中文问题：** BDI 实践推理中的 deliberation 是什么？

**English answer:** It is deciding what to do by generating possible options and filtering them into intentions.

**中文答案：** 它是“决定做什么”的过程，包括生成可能选项，并筛选成智能体承诺的意图。

### Q2(a)
**English question:** What is means-end reasoning?

**中文问题：** 什么是 means-end reasoning（手段-目的推理）？

**English answer:** It is deciding how to achieve an intention by planning a sequence of actions.

**中文答案：** 它是“决定如何实现意图”的过程，即生成实现目标的动作计划。

### Q2(b)
**English question:** How does the BDI loop maintain commitment to intentions?

**中文问题：** BDI 循环如何保持对意图的承诺？

**English answer:** It keeps executing while the intention is possible, not yet achieved, and the plan still has actions; it only reconsiders intentions when the `reconsider` heuristic says deliberation is worthwhile.

**中文答案：** 只要意图仍可能、尚未达成、计划仍有动作，它就继续执行；只有当 `reconsider` 启发式判断重新审议值得时，才重新考虑意图。

### Q2(c)
**English question:** What is the transduction problem?

**中文问题：** 什么是 transduction problem？

**English answer:** It is the problem of converting raw sensor data such as video, audio, speech, or proximity data into an accurate symbolic description quickly enough to be useful.

**中文答案：** 它是把视频、音频、语音、距离等原始传感器数据及时转换为准确符号描述的问题。

### Q2(d)
**English question:** Why does the proposed Blocksworld plan fail?

**中文问题：** 为什么给定 Blocksworld 计划失败？

**English answer:** After `Stack(B,A)`, `Swap(B,A)` fails because `OnTable(A)` is false; `Swap(D,C)` also fails because `D` is not clear.

**中文答案：** 执行 `Stack(B,A)` 后，`Swap(B,A)` 因 `OnTable(A)` 不成立而失败；`Swap(D,C)` 也因 `D` 不清空而失败。

### Q2(e)
**English question:** What is a valid Blocksworld plan?

**中文问题：** 一个有效的 Blocksworld 计划是什么？

**English answer:** One valid plan is `Unstack(A,D), Swap(D,C), Stack(B,C), Stack(A,B)`.

**中文答案：** 一个可行计划是 `Unstack(A,D), Swap(D,C), Stack(B,C), Stack(A,B)`。

### Q3(a)
**English question:** What is a social law in a multi-agent system?

**中文问题：** 多智能体系统中的 social law 是什么？

**English answer:** It is a set of constraints forbidding certain actions in certain environment states, intended to coordinate agents while preserving reachability between focal states.

**中文答案：** 它是一组约束，禁止智能体在某些环境状态下执行某些动作，用于协调行为，同时不应阻止焦点状态之间的可达性。

### Q3(a)
**English question:** Give an example of a useful social law.

**中文问题：** 举一个有用 social law 的例子。

**English answer:** In a grid world, rules such as moving left on even rows, right on odd rows, and moving up/down at specified columns can prevent collisions.

**中文答案：** 在网格世界中，可规定偶数行向左、奇数行向右，并在特定列向上/向下移动，从而避免碰撞。

### Q3(b)
**English question:** What are the pure strategy Nash equilibria in Stag Hunt?

**中文问题：** Stag Hunt 中的纯策略纳什均衡是什么？

**English answer:** `(Cooperate, Cooperate)` and `(Defect, Defect)`; in each, neither player benefits from unilateral deviation.

**中文答案：** `(合作, 合作)` 和 `(背叛, 背叛)`；在这两个结果中，任一玩家单方面改变策略都不会更好。

### Q3(c)
**English question:** What is a mixed strategy Nash equilibrium?

**中文问题：** 什么是混合策略纳什均衡？

**English answer:** It allows players to randomise over pure strategies; in matching pennies, each player choosing each side with probability 0.5 is a mixed equilibrium.

**中文答案：** 参与者可按概率随机选择纯策略；在 matching pennies 中，双方各以 0.5 概率选择两面就是混合均衡。

### Q3(c)
**English question:** What is Nash's theorem?

**中文问题：** Nash 定理是什么？

**English answer:** Every finite game has at least one Nash equilibrium in mixed strategies.

**中文答案：** 每个有限博弈都至少存在一个混合策略纳什均衡。

### Q4(a)
**English question:** How are Shapley values computed from a marginal contribution net?

**中文问题：** 如何从边际贡献网络计算 Shapley 值？

**English answer:** Each rule's value is shared equally among the agents in that rule; summing the shares gives each agent's value.

**中文答案：** 每条规则的价值由该规则中的智能体平均分享，把相关规则的份额相加就是该智能体的 Shapley 值。

### Q4(a)
**English question:** What are the Shapley values in the 2017/18 marginal contribution net?

**中文问题：** 2017/18 边际贡献网络中的 Shapley 值是多少？

**English answer:** `phi_a = 6`, `phi_b = 3 2/3`, `phi_c = 2 1/3`, `phi_d = 8 1/2`, and `phi_e = 1/2`.

**中文答案：** `phi_a = 6`，`phi_b = 3 2/3`，`phi_c = 2 1/3`，`phi_d = 8 1/2`，`phi_e = 1/2`。

### Q4(b)(ii)
**English question:** What does it mean for a payoff distribution to be in the core?

**中文问题：** 支付分配在 core 中是什么意思？

**English answer:** The total distribution must be feasible for the grand coalition, and no coalition or individual should receive less than it can guarantee by itself.

**中文答案：** 总支付必须对大联盟可行，并且任何联盟或个人都不应少于其自身能够保证的价值。

### Q4(b)(ii)
**English question:** Give core and non-core examples from the weighted graph game.

**中文问题：** 给出该加权图博弈中的 core 与非 core 例子。

**English answer:** `<10,15>` is in the core; `<4,21>` and `<20,5>` are not because one player receives less than its singleton value.

**中文答案：** `<10,15>` 在 core 中；`<4,21>` 和 `<20,5>` 不在 core 中，因为其中一方少于自己的单人联盟价值。

### Q4(c)
**English question:** Why is truthful bidding dominant in a Vickrey auction?

**中文问题：** 为什么 Vickrey 拍卖中真实报价是占优策略？

**English answer:** Overbidding can make the bidder win while paying more than its true value; underbidding can make it lose an item it would profit from winning, while winning still pays the second-highest bid.

**中文答案：** 报高可能导致赢得物品但支付超过真实价值而亏损；报低可能错失本可获利的物品，而赢了时支付仍由第二高价决定。

### Q5(a)
**English question:** What is a rebuttal in deductive argumentation?

**中文问题：** 演绎论证中的 rebuttal 是什么？

**English answer:** One argument rebuts another when its conclusion or premise contradicts the other's conclusion; for example, `p2` is equivalent to `not p1`.

**中文答案：** 当一个论证的结论或前提与另一个论证的结论相矛盾时构成反驳，例如 `p2` 等价于 `not p1`。

### Q5(b)
**English question:** What is an undercut in deductive argumentation?

**中文问题：** 演绎论证中的 undercut 是什么？

**English answer:** One argument undercuts another when it attacks a proposition inside the other's support set; for example, `p2` is equivalent to `not q1` for some `q1` in `S1`.

**中文答案：** 当一个论证攻击另一个论证支持集中的某个命题时构成削弱，例如对某个 `q1 in S1`，`p2` 等价于 `not q1`。

### Q5(c)
**English question:** What is a conflict-free set in abstract argumentation?

**中文问题：** 抽象论证中的 conflict-free set 是什么？

**English answer:** It is a set of arguments where no argument in the set attacks another argument in the same set.

**中文答案：** 集合内部没有任何论证攻击同集合中的其他论证。

### Q5(d)
**English question:** What is an admissible set?

**中文问题：** 什么是 admissible set？

**English answer:** It is conflict-free and defends all of its members against attacks.

**中文答案：** 它必须是无冲突的，并且能为集合中的所有论证抵御攻击。

### Q5(e)
**English question:** What is a preferred extension?

**中文问题：** 什么是 preferred extension？

**English answer:** It is a maximal admissible set; in the exam graph, the single preferred extension is `{A, C, E}`.

**中文答案：** 它是极大的 admissible set；本题图中唯一的 preferred extension 是 `{A, C, E}`。

### Q5(f)
**English question:** What is the JADE Agent Management System?

**中文问题：** JADE 中的 Agent Management System 是什么？

**English answer:** The AMS manages agent names and identifiers, creates and destroys agents, and controls the platform.

**中文答案：** AMS 管理智能体名称和标识符，负责创建和销毁智能体，并控制平台。

### Q5(g)
**English question:** What is the JADE Directory Facilitator?

**中文问题：** JADE 中的 Directory Facilitator 是什么？

**English answer:** The DF is a yellow-pages service where agents register services and discover other agents by service.

**中文答案：** DF 类似黄页服务，智能体可注册自己的服务，也可按服务查找其他智能体。

## 2018/19

### Q1(a)
**English question:** What are the aims and outputs of deliberation and means-end reasoning?

**中文问题：** deliberation 和 means-end reasoning 的目标与输出分别是什么？

**English answer:** Deliberation decides what the agent should try to achieve; it generates options and filters them into intentions. Means-end reasoning decides how to achieve those intentions; its output is a plan, namely a sequence of actions.

**中文答案：** deliberation 决定智能体“要做什么”，先生成选项，再筛选成意图。means-end reasoning 决定“如何实现这些意图”，输出是一个计划，也就是动作序列。

### Q1(b)
**English question:** In STRIPS, what are the precondition list, delete list, and add list of an action?

**中文问题：** STRIPS 中一个动作的 precondition list、delete list 和 add list 分别表示什么？

**English answer:** The precondition list contains facts that must be true before the action can be executed. The delete list contains facts that become false after the action. The add list contains facts that become true after the action.

**中文答案：** precondition list 是动作执行前必须为真的事实；delete list 是动作执行后变为假的事实；add list 是动作执行后变为真的事实。

### Q1(c)(i)
**English question:** What is the `brf(B, rho)` function?

**中文问题：** `brf(B, rho)` 函数是什么？

**English answer:** It is the belief revision function. It updates the belief base `B` using the new percept `rho`.

**中文答案：** 它是信念修正函数，用新的感知 `rho` 更新信念库 `B`。

### Q1(c)(ii)
**English question:** What is the `options(B, I)` function?

**中文问题：** `options(B, I)` 函数是什么？

**English answer:** It generates the agent's possible options or desires from its current beliefs and intentions.

**中文答案：** 它根据当前信念和意图生成智能体可能的选项或欲望。

### Q1(c)(iii)
**English question:** What is the `filter(B, D, I)` function?

**中文问题：** `filter(B, D, I)` 函数是什么？

**English answer:** It selects the best or most appropriate options from the generated desires and commits the agent to them as intentions.

**中文答案：** 它从生成的欲望中选择最合适的选项，并把它们确定为智能体承诺执行的意图。

### Q1(c)(iv)
**English question:** What is the `plan(B, I, Ac)` function?

**中文问题：** `plan(B, I, Ac)` 函数是什么？

**English answer:** It performs planning over the available actions `Ac`, producing an action sequence that should achieve intention `I` from beliefs `B`.

**中文答案：** 它在可用动作集合 `Ac` 上进行规划，生成一个能从信念 `B` 实现意图 `I` 的动作序列。

### Q1(d)(i)
**English question:** If the environment is static, does the agent need to reconsider its initial intentions?

**中文问题：** 如果环境是静态的，智能体是否需要重新考虑初始意图？

**English answer:** True: the agent need not reconsider its initial intentions, because the percepts and beliefs do not change in a way that would justify changing the original intentions.

**中文答案：** True：智能体不需要重新考虑初始意图。因为感知和信念不会发生足以改变原始意图的变化。

### Q1(d)(ii)
**English question:** If the environment is static, will `sound(pi, I, B)` be either true throughout or false throughout?

**中文问题：** 如果环境是静态的，`sound(pi, I, B)` 是否会一直为真或一直为假？

**English answer:** True. Since the beliefs do not change due to new percepts, the plan's soundness is not invalidated by environmental change.

**中文答案：** 是。由于新感知不会改变信念，计划的可靠性不会因为环境变化而被破坏。

### Q1(d)(iii)
**English question:** If the environment is static, must the agent change its original plan at least once?

**中文问题：** 如果环境是静态的，智能体是否至少会改变一次原计划？

**English answer:** False. If the original plan remains sound, the agent has no reason to replan.

**中文答案：** 否。如果原计划仍然可靠，智能体没有理由重新规划。

### Q2(a)(i)
**English question:** What is reactivity?

**中文问题：** 什么是 reactivity（反应性）？

**English answer:** Reactivity is the ability of an agent to perceive changes in its environment and respond to those changes in a timely way.

**中文答案：** 反应性是指智能体能够感知环境变化，并及时对这些变化作出响应。

### Q2(a)(ii)
**English question:** What is proactiveness?

**中文问题：** 什么是 proactiveness（主动性）？

**English answer:** Proactiveness is goal-directed behaviour: the agent does not merely react, but takes initiative to pursue its objectives.

**中文答案：** 主动性是目标导向行为：智能体不只是被动反应，还会主动采取行动追求目标。

### Q2(a)(iii)
**English question:** What is social ability?

**中文问题：** 什么是 social ability（社会能力）？

**English answer:** Social ability is the ability to interact with other agents or humans, usually through communication, cooperation, coordination, or negotiation.

**中文答案：** 社会能力是指智能体与其他智能体或人类交互的能力，通常包括通信、合作、协调或谈判。

### Q2(b)(ii)
**English question:** How do we compute the expected utilities of `Ag1` and `Ag2` in the given environment?

**中文问题：** 如何计算给定环境中 `Ag1` 和 `Ag2` 的期望效用？

**English answer:** Sum the probability of each run multiplied by the utility of that run. Here `EU(Ag1)=0.9*0.6*(4+8)+0.9*0.4*(4+6)+0.1*5=10.58`; `EU(Ag2)=0.2*4+0.8*0.6*(5+3+2)+0.8*0.4*(5+7)=9.44`. Therefore `Ag1` is optimal.

**中文答案：** 对每条运行，用运行概率乘以该运行的总效用再求和。本题中 `EU(Ag1)=0.9*0.6*(4+8)+0.9*0.4*(4+6)+0.1*5=10.58`；`EU(Ag2)=0.2*4+0.8*0.6*(5+3+2)+0.8*0.4*(5+7)=9.44`。因此 `Ag1` 最优。

### Q3(a)
**English question:** What is Nash equilibrium?

**中文问题：** 什么是 Nash equilibrium（纳什均衡）？

**English answer:** A Nash equilibrium is a strategy profile where no player can improve its payoff by unilaterally changing strategy, assuming the other players keep their strategies fixed.

**中文答案：** 纳什均衡是一个策略组合：在其他玩家策略不变的情况下，没有任何玩家能通过单方面改变策略获得更高收益。

### Q3(b)
**English question:** What are the pure strategy Nash equilibria in the Prisoner's Dilemma matrix?

**中文问题：** Prisoner's Dilemma 矩阵中的纯策略纳什均衡是什么？

**English answer:** The pure strategy Nash equilibrium is `(defect, defect)`, because defection is each player's best response to both cooperation and defection by the other player.

**中文答案：** 纯策略纳什均衡是 `(defect, defect)`，因为无论对方合作还是背叛，背叛都是每个玩家的最佳回应。

### Q3(b)
**English question:** What are the pure strategy Nash equilibria in the Stag Hunt matrix?

**中文问题：** Stag Hunt 矩阵中的纯策略纳什均衡是什么？

**English answer:** The pure strategy Nash equilibria are `(defect, defect)` and `(cooperate, cooperate)`. In both outcomes, neither player can gain by changing strategy alone.

**中文答案：** 纯策略纳什均衡是 `(defect, defect)` 和 `(cooperate, cooperate)`。在这两个结果中，任一玩家单方面改变策略都不会更好。

### Q3(c)(i)
**English question:** What is the game of matching pennies?

**中文问题：** matching pennies 是什么游戏？

**English answer:** Two players simultaneously choose one of two sides. One player wins if the choices match, while the other wins if the choices differ; it is a zero-sum game.

**中文答案：** 两个玩家同时选择硬币的一面。若双方选择相同，一方获胜；若不同，另一方获胜。这是一个零和博弈。

### Q3(c)(ii)
**English question:** Does the matching pennies payoff matrix have a pure strategy Nash equilibrium?

**中文问题：** matching pennies 的收益矩阵是否存在纯策略纳什均衡？

**English answer:** No. In every pure strategy outcome, one of the players would prefer to switch strategy, so no pure profile is stable.

**中文答案：** 不存在。每一个纯策略结果中，总有一方希望改变策略，因此没有稳定的纯策略组合。

### Q3(c)(iii)
**English question:** What is the mixed strategy Nash equilibrium in matching pennies?

**中文问题：** matching pennies 中的混合策略纳什均衡是什么？

**English answer:** Each player randomises between the two pure strategies with probability `0.5` and `0.5`, making the opponent indifferent between its own strategies.

**中文答案：** 每个玩家都以 `0.5` 和 `0.5` 的概率在两个纯策略之间随机选择，使对方对自己的两个策略无差异。

### Q3(c)(iv)
**English question:** What does Nash's Theorem state?

**中文问题：** Nash 定理的内容是什么？

**English answer:** Every finite game has at least one Nash equilibrium in mixed strategies.

**中文答案：** 每个有限博弈都至少存在一个混合策略纳什均衡。

### Q4(a)
**English question:** How is a characteristic function value computed from a marginal contribution net?

**中文问题：** 如何从 marginal contribution net 计算 characteristic function 的值？

**English answer:** A coalition's value is the sum of the values of all rules whose left-hand-side conditions are satisfied by that coalition.

**中文答案：** 一个联盟的价值等于所有被该联盟满足的规则的数值之和。

### Q4(a)(i)
**English question:** What is `v({a})` for the given marginal contribution net?

**中文问题：** 给定 marginal contribution net 中 `v({a})` 是多少？

**English answer:** `v({a}) = 0`, because no rule is satisfied by coalition `{a}` alone.

**中文答案：** `v({a}) = 0`，因为只有 `{a}` 时没有任何规则被满足。

### Q4(a)(ii)
**English question:** What is `v({a,c})` for the given marginal contribution net?

**中文问题：** 给定 marginal contribution net 中 `v({a,c})` 是多少？

**English answer:** `v({a,c}) = 2`, using the rule `a and c -> 2`.

**中文答案：** `v({a,c}) = 2`，使用规则 `a and c -> 2`。

### Q4(a)(iii)
**English question:** What is `v({b,d})` for the given marginal contribution net?

**中文问题：** 给定 marginal contribution net 中 `v({b,d})` 是多少？

**English answer:** `v({b,d}) = 5`, using the rule `d -> 5`.

**中文答案：** `v({b,d}) = 5`，使用规则 `d -> 5`。

### Q4(a)(iv)
**English question:** What is `v({a,d})` for the given marginal contribution net?

**中文问题：** 给定 marginal contribution net 中 `v({a,d})` 是多少？

**English answer:** `v({a,d}) = 5`, using the rule `d -> 5`.

**中文答案：** `v({a,d}) = 5`，使用规则 `d -> 5`。

### Q4(a)(v)
**English question:** What is `v({a,b,c,d})` for the given marginal contribution net?

**中文问题：** 给定 marginal contribution net 中 `v({a,b,c,d})` 是多少？

**English answer:** `v({a,b,c,d}) = 7+3+5+4+2 = 21`, because all five rules are satisfied.

**中文答案：** `v({a,b,c,d}) = 7+3+5+4+2 = 21`，因为五条规则全部被满足。

### Q4(b)
**English question:** How does the Shapley value capture a fair distribution of coalitional value?

**中文问题：** Shapley value 如何体现联盟价值的公平分配？

**English answer:** The Shapley value gives each agent its average marginal contribution over all possible orders in which agents may join a coalition. Formally, `phi_i(v)=sum_{S subseteq N\\{i}} |S|!(n-|S|-1)!/n! * (v(S union {i})-v(S))`.

**中文答案：** Shapley 值把每个智能体在所有可能加入顺序中的平均边际贡献作为其分配。形式化地，`phi_i(v)=sum_{S subseteq N\\{i}} |S|!(n-|S|-1)!/n! * (v(S union {i})-v(S))`。

### Q4(b)
**English question:** What fairness axioms does the Shapley value satisfy?

**中文问题：** Shapley value 满足哪些公平性公理？

**English answer:** It satisfies symmetry, dummy player, additivity, and efficiency. Symmetry gives equal payoff to agents with equal contributions; dummy gives only individual value to agents adding no extra value; additivity preserves values across combined games; efficiency distributes the full grand-coalition value.

**中文答案：** 它满足对称性、虚玩家、可加性和有效性。对称性表示贡献相同者收益相同；虚玩家表示没有额外贡献者只得到自身价值；可加性表示合并博弈时分配可相加；有效性表示完整分配大联盟的总价值。

### Q5(a)
**English question:** What is the grounded extension of the given abstract argumentation system?

**中文问题：** 给定抽象论证系统的 grounded extension 是什么？

**English answer:** The grounded extension is `{F, D, B}`. `F` is unattacked, so it is `IN`; therefore `A` and `E` are `OUT`. Since `E` is `OUT`, `D` is defended and becomes `IN`; then `A` is `OUT`, so `B` becomes `IN`; `C` is attacked by `B` and `D`, so `C` is `OUT`.

**中文答案：** grounded extension 是 `{F, D, B}`。`F` 没有被攻击，所以为 `IN`；因此 `A` 和 `E` 为 `OUT`。由于 `E` 为 `OUT`，`D` 被防卫并成为 `IN`；之后 `A` 为 `OUT`，所以 `B` 成为 `IN`；`C` 被 `B` 和 `D` 攻击，所以为 `OUT`。

### Q5(b)
**English question:** Which candidates can be possible winners in the given majority graph?

**中文问题：** 给定多数图中哪些候选人可能成为 possible winner？

**English answer:** All four candidates `A`, `B`, `C`, and `D` can win under some sequential majority agenda. Example agendas are: `A`: `(B,C,D,A)`; `B`: `(A,C,D,B)`; `C`: `(A,B,D,C)`; `D`: `(C,A,B,D)`.

**中文答案：** 四个候选人 `A`、`B`、`C`、`D` 都可能在某个顺序多数议程中获胜。示例议程为：`A`: `(B,C,D,A)`；`B`: `(A,C,D,B)`；`C`: `(A,B,D,C)`；`D`: `(C,A,B,D)`。

### Q5(c)(i)
**English question:** What is a possible winner in a sequential majority election?

**中文问题：** 顺序多数选举中的 possible winner 是什么？

**English answer:** An outcome is a possible winner if there exists at least one agenda that makes it the final winner. In a majority graph, this can be checked by asking whether some ordering of pairwise contests can eliminate the alternatives that beat it before the final contest.

**中文答案：** 如果存在至少一个议程能使某个结果最终获胜，那么它就是 possible winner。在多数图中，可以通过检查是否存在一种两两对决顺序，能在最终对决前淘汰击败它的候选人来判断。

### Q5(c)(ii)
**English question:** What is a Condorcet winner in a sequential majority election?

**中文问题：** 顺序多数选举中的 Condorcet winner 是什么？

**English answer:** A Condorcet winner is an outcome that beats every other outcome in pairwise majority contests; equivalently, it wins under every possible agenda.

**中文答案：** Condorcet winner 是在两两多数对决中击败所有其他结果的候选人；等价地，它在每一种可能议程下都会获胜。

### Q5(c)(iii)
**English question:** Are there any Condorcet winners in the given majority graph?

**中文问题：** 给定多数图中是否存在 Condorcet winner？

**English answer:** No. No candidate has outgoing majority edges to all other candidates, so there is no overall winner for every possible agenda.

**中文答案：** 没有。没有任何候选人能在多数图中击败所有其他候选人，因此不存在对所有议程都获胜的总体赢家。
