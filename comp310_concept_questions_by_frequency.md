# COMP310 Concept Questions Grouped by Frequency

This document reorganises the 2016/17, 2017/18, and 2018/19 concept questions by similar topic type, ordered from highest to lowest exam frequency.

## Frequency 3/3: BDI Practical Reasoning, Planning, and Agent Control Loops

### Deliberation and Means-End Reasoning
**English question:** What are deliberation and means-end reasoning in practical reasoning?

**中文问题：** 实践推理中的 deliberation 和 means-end reasoning 是什么？

**English answer:** Deliberation decides what the agent should try to achieve by generating options and filtering them into intentions. Means-end reasoning decides how to achieve those intentions by producing a plan, usually a sequence of actions.

**中文答案：** deliberation 决定智能体“要做什么”，通过生成选项并筛选成意图；means-end reasoning 决定“如何实现意图”，输出通常是一个动作计划。

### Belief Revision Function
**English question:** What is the `brf(B, rho)` function in a BDI/practical reasoning agent?

**中文问题：** BDI/实践推理智能体中的 `brf(B, rho)` 函数是什么？

**English answer:** It is the belief revision function. It updates the belief base `B` using the new percept `rho`, so the agent's internal representation reflects what it has perceived.

**中文答案：** 它是信念修正函数，用新的感知 `rho` 更新信念库 `B`，使智能体内部状态反映当前感知到的信息。

### Options Function
**English question:** What is the `options(B, I)` function?

**中文问题：** `options(B, I)` 函数是什么？

**English answer:** It generates possible options, alternatives, or desires from the agent's current beliefs and intentions. It is the option-generation stage of deliberation.

**中文答案：** 它根据智能体当前的信念和意图生成可能的选项、替代方案或欲望，是 deliberation 中的选项生成阶段。

### Filter Function
**English question:** What is the `filter(B, D, I)` function?

**中文问题：** `filter(B, D, I)` 函数是什么？

**English answer:** It selects the best or most appropriate options from the generated desires `D` and commits the agent to them as intentions.

**中文答案：** 它从生成的欲望 `D` 中选择最合适的选项，并把这些选项确定为智能体承诺执行的意图。

### Plan Function
**English question:** What is the `plan(B, I)` or `plan(B, I, Ac)` function?

**中文问题：** `plan(B, I)` 或 `plan(B, I, Ac)` 函数是什么？

**English answer:** It performs means-end reasoning by constructing a sequence of actions, using the available action set if given, that should achieve intention `I` from beliefs `B`.

**中文答案：** 它执行手段-目的推理，根据当前信念 `B`，并在给定动作集合时使用该动作集合，生成实现意图 `I` 的动作序列。

### Soundness of a Plan
**English question:** What is the `sound(pi, I, B)` function?

**中文问题：** `sound(pi, I, B)` 函数是什么？

**English answer:** It checks whether the current plan `pi` is still a correct and usable plan for achieving intention `I` under the current beliefs `B`.

**中文答案：** 它检查当前计划 `pi` 在当前信念 `B` 下是否仍然是实现意图 `I` 的正确可用计划。

### BDI Loop Termination
**English question:** Why can the inner BDI loop terminate?

**中文问题：** BDI 内层循环为什么会终止？

**English answer:** It can terminate because the plan is empty, because the intention has already succeeded, or because the intention is now believed to be impossible.

**中文答案：** 它可能因为计划为空、意图已经成功、或智能体现在认为该意图不可能实现而终止。

### Commitment and Reconsideration
**English question:** How does the BDI loop maintain commitment to intentions?

**中文问题：** BDI 循环如何保持对意图的承诺？

**English answer:** The loop continues while the intention is possible, not yet achieved, and the plan still contains actions. The agent only reconsiders intentions when the `reconsider` heuristic judges that deliberation is worthwhile.

**中文答案：** 只要意图仍可能、尚未达成、计划仍有动作，循环就继续执行。只有当 `reconsider` 启发式判断重新审议值得时，智能体才重新考虑意图。

### Static Environment and Replanning
**English question:** What happens to reconsideration and replanning if the environment is static?

**中文问题：** 如果环境是静态的，重新考虑意图和重新规划会怎样？

**English answer:** If percepts and beliefs do not change, the agent need not reconsider initial intentions; a sound plan remains sound, and the agent has no reason to change the original plan.

**中文答案：** 如果感知和信念不变，智能体不需要重新考虑初始意图；可靠计划会保持可靠，智能体也没有理由改变原计划。

### STRIPS Action Lists
**English question:** In STRIPS, what are the precondition list, delete list, and add list?

**中文问题：** STRIPS 中的 precondition list、delete list 和 add list 分别是什么？

**English answer:** The precondition list gives facts that must be true before an action can execute. The delete list gives facts made false by the action. The add list gives facts made true by the action.

**中文答案：** precondition list 是动作执行前必须为真的事实；delete list 是动作执行后变为假的事实；add list 是动作执行后变为真的事实。

### Blocksworld Planning
**English question:** How should Blocksworld plans be checked?

**中文问题：** 如何检查 Blocksworld 计划？

**English answer:** Check each action in sequence against its preconditions, then update the state using its delete and add lists. A plan fails as soon as an action's preconditions are not satisfied.

**中文答案：** 按顺序检查每个动作的前提条件，再用 delete list 和 add list 更新状态。只要某个动作的前提不满足，计划就失败。

### Transduction Problem
**English question:** What is the transduction problem?

**中文问题：** 什么是 transduction problem？

**English answer:** It is the problem of converting raw sensor data such as video, audio, speech, or proximity data into an accurate symbolic description quickly enough for the agent to use.

**中文答案：** 它是把视频、音频、语音、距离等原始传感器数据及时转换为准确符号描述的问题，使智能体能够使用这些信息。

## Frequency 3/3: Game Theory and Nash Equilibrium

### Nash Equilibrium
**English question:** What is a Nash equilibrium?

**中文问题：** 什么是 Nash equilibrium（纳什均衡）？

**English answer:** A Nash equilibrium is a strategy profile where no player can improve its payoff by unilaterally changing strategy, assuming the other players keep their strategies fixed.

**中文答案：** 纳什均衡是一个策略组合：在其他玩家策略不变的情况下，没有任何玩家能通过单方面改变策略获得更高收益。

### Pure Strategy Nash Equilibrium
**English question:** What is a pure strategy Nash equilibrium?

**中文问题：** 什么是纯策略纳什均衡？

**English answer:** It is a Nash equilibrium in which each player chooses one definite pure strategy rather than randomising over strategies.

**中文答案：** 它是每个玩家都选择一个确定纯策略、而不是按概率随机选择策略的纳什均衡。

### Chicken
**English question:** What are the pure strategy Nash equilibria in Chicken?

**中文问题：** Chicken 游戏中的纯策略纳什均衡是什么？

**English answer:** The equilibria are `(Cooperate, Defect)` and `(Defect, Cooperate)`, because in each outcome neither player benefits from changing strategy alone.

**中文答案：** 均衡是 `(合作, 背叛)` 和 `(背叛, 合作)`，因为在这两个结果中，任何一方单独改变策略都不会更好。

### Prisoner's Dilemma
**English question:** What is the pure strategy Nash equilibrium in Prisoner's Dilemma?

**中文问题：** Prisoner's Dilemma 中的纯策略纳什均衡是什么？

**English answer:** The equilibrium is `(defect, defect)`, because defection is each player's best response whether the other player cooperates or defects.

**中文答案：** 均衡是 `(defect, defect)`，因为无论对方合作还是背叛，背叛都是每个玩家的最佳回应。

### Stag Hunt
**English question:** What are the pure strategy Nash equilibria in Stag Hunt?

**中文问题：** Stag Hunt 中的纯策略纳什均衡是什么？

**English answer:** The equilibria are `(Cooperate, Cooperate)` and `(Defect, Defect)`. In both outcomes, neither player can improve by deviating alone.

**中文答案：** 均衡是 `(合作, 合作)` 和 `(背叛, 背叛)`。在这两个结果中，任一玩家单方面改变策略都不会更好。

### Matching Pennies
**English question:** What is the game of matching pennies?

**中文问题：** matching pennies 是什么游戏？

**English answer:** Two players simultaneously choose one of two sides. One player wins if the choices match, while the other wins if the choices differ; it is a zero-sum game.

**中文答案：** 两个玩家同时选择硬币的一面。若双方选择相同，一方获胜；若不同，另一方获胜。这是一个零和博弈。

### Pure Equilibrium in Matching Pennies
**English question:** Does matching pennies have a pure strategy Nash equilibrium?

**中文问题：** matching pennies 是否有纯策略纳什均衡？

**English answer:** No. In every pure strategy outcome, one player would prefer to switch strategy, so no pure strategy profile is stable.

**中文答案：** 没有。每一个纯策略结果中，总有一方希望改变策略，因此没有稳定的纯策略组合。

### Mixed Strategy Nash Equilibrium
**English question:** What is a mixed strategy Nash equilibrium?

**中文问题：** 什么是混合策略纳什均衡？

**English answer:** It is a Nash equilibrium where players randomise over pure strategies. In matching pennies, each player chooses each side with probability `0.5`.

**中文答案：** 它是玩家按概率在纯策略之间随机选择的纳什均衡。在 matching pennies 中，双方各以 `0.5` 概率选择两面。

### Nash's Theorem
**English question:** What does Nash's Theorem state?

**中文问题：** Nash 定理的内容是什么？

**English answer:** Every finite game has at least one Nash equilibrium in mixed strategies.

**中文答案：** 每个有限博弈都至少存在一个混合策略纳什均衡。

## Frequency 3/3: Cooperative Games, Coalitions, and Shapley Value

### Shapley Value
**English question:** What is the Shapley value?

**中文问题：** 什么是 Shapley value（Shapley 值）？

**English answer:** The Shapley value gives each agent its average marginal contribution over all possible orders in which agents may join a coalition.

**中文答案：** Shapley 值把每个智能体在所有可能加入联盟顺序中的平均边际贡献作为其分配。

### Formal Shapley Formula
**English question:** What is the formal definition of the Shapley value?

**中文问题：** Shapley 值的形式化定义是什么？

**English answer:** `phi_i(v)=sum_{S subseteq N\\{i}} |S|!(n-|S|-1)!/n! * (v(S union {i})-v(S))`, where the last term is agent `i`'s marginal contribution to coalition `S`.

**中文答案：** `phi_i(v)=sum_{S subseteq N\\{i}} |S|!(n-|S|-1)!/n! * (v(S union {i})-v(S))`，其中最后一项是智能体 `i` 对联盟 `S` 的边际贡献。

### Shapley Fairness Axioms
**English question:** What fairness axioms does the Shapley value satisfy?

**中文问题：** Shapley 值满足哪些公平性公理？

**English answer:** It satisfies symmetry, dummy player, additivity, and efficiency. These ensure equal contributors are treated equally, non-contributors get only their own value, combined games add consistently, and the grand-coalition value is fully distributed.

**中文答案：** 它满足对称性、虚玩家、可加性和有效性。这些公理保证贡献相同者收益相同、无额外贡献者只得自身价值、合并博弈时分配一致相加、大联盟总价值被完整分配。

### Marginal Contribution
**English question:** What is an agent's marginal contribution to a coalition?

**中文问题：** 智能体对联盟的边际贡献是什么？

**English answer:** It is the extra value created when the agent joins a coalition: `delta_i(S)=v(S union {i})-v(S)`.

**中文答案：** 它是智能体加入联盟后带来的额外价值：`delta_i(S)=v(S union {i})-v(S)`。

### Marginal Contribution Net Values
**English question:** How is a characteristic function value computed from a marginal contribution net?

**中文问题：** 如何从 marginal contribution net 计算 characteristic function 的值？

**English answer:** A coalition's value is the sum of all rule values whose left-hand-side conditions are satisfied by that coalition.

**中文答案：** 一个联盟的价值等于所有被该联盟满足的规则数值之和。

### Core
**English question:** What does it mean for a payoff distribution to be in the core?

**中文问题：** 支付分配在 core 中是什么意思？

**English answer:** The distribution must be feasible for the grand coalition, and no coalition or individual should receive less than it can guarantee by itself.

**中文答案：** 该分配必须对大联盟可行，并且任何联盟或个人都不应少于其自身能够保证的价值。

## Frequency 3/3: Argumentation

### Grounded Extension
**English question:** What is the grounded extension in an abstract argumentation system?

**中文问题：** 抽象论证系统中的 grounded extension 是什么？

**English answer:** It is the least fixed point of the argument defence process: start with unattacked arguments as `IN`, mark arguments they attack as `OUT`, then accept arguments whose attackers are all defeated.

**中文答案：** 它是论证防卫过程的最小不动点：先把未被攻击的论证标为 `IN`，把它们攻击的论证标为 `OUT`，再接受所有攻击者都被击败的论证。

### Empty Grounded Extension
**English question:** When can the grounded extension be empty?

**中文问题：** grounded extension 什么时候可能为空？

**English answer:** It can be empty when every argument is attacked and no argument can be initially accepted as unattacked.

**中文答案：** 当每个论证都受到攻击，且没有任何论证能先作为未受攻击论证被接受时，grounded extension 可能为空。

### Deductive Rebuttal
**English question:** What is a rebuttal in deductive argumentation?

**中文问题：** 演绎论证中的 rebuttal 是什么？

**English answer:** One argument rebuts another when its conclusion or premise contradicts the other's conclusion; for example, `p2` is equivalent to `not p1`.

**中文答案：** 当一个论证的结论或前提与另一个论证的结论相矛盾时构成反驳，例如 `p2` 等价于 `not p1`。

### Deductive Undercut
**English question:** What is an undercut in deductive argumentation?

**中文问题：** 演绎论证中的 undercut 是什么？

**English answer:** One argument undercuts another when it attacks a proposition inside the other's support set; for example, `p2` is equivalent to `not q1` for some `q1` in `S1`.

**中文答案：** 当一个论证攻击另一个论证支持集中的某个命题时构成削弱，例如对某个 `q1 in S1`，`p2` 等价于 `not q1`。

### Conflict-Free Set
**English question:** What is a conflict-free set?

**中文问题：** 什么是 conflict-free set？

**English answer:** It is a set of arguments where no argument in the set attacks another argument in the same set.

**中文答案：** 它是集合内部没有任何论证攻击同集合中其他论证的论证集合。

### Admissible Set
**English question:** What is an admissible set?

**中文问题：** 什么是 admissible set？

**English answer:** It is conflict-free and defends all of its members against attacks.

**中文答案：** 它必须是无冲突的，并且能为集合中的所有论证抵御攻击。

### Preferred Extension
**English question:** What is a preferred extension?

**中文问题：** 什么是 preferred extension？

**English answer:** It is a maximal admissible set.

**中文答案：** 它是极大的 admissible set。

## Frequency 2/3: Agents, Environments, Runs, and Utility

### Agent Properties
**English question:** What are reactivity, proactiveness, and social ability?

**中文问题：** reactivity、proactiveness 和 social ability 分别是什么？

**English answer:** Reactivity is timely response to environmental change. Proactiveness is taking initiative to pursue goals. Social ability is interacting with other agents or humans through communication, cooperation, coordination, or negotiation.

**中文答案：** reactivity 是及时响应环境变化；proactiveness 是主动追求目标；social ability 是通过通信、合作、协调或谈判与其他智能体或人类交互。

### Abstract Agent Functions
**English question:** What are `see`, `action`, and `next` in an abstract agent model?

**中文问题：** 抽象智能体模型中的 `see`、`action` 和 `next` 是什么？

**English answer:** `see: E -> Per` maps environment states to percepts. `action: I -> Ac` maps internal states or intentions to actions. `next: I x Per -> I` updates the internal state using the current state and a percept.

**中文答案：** `see: E -> Per` 把环境状态映射为感知；`action: I -> Ac` 把内部状态或意图映射为动作；`next: I x Per -> I` 根据当前内部状态和感知更新内部状态。

### Predicate Task Specification
**English question:** What is a predicate task specification?

**中文问题：** 什么是谓词任务规范？

**English answer:** It maps each run to a Boolean utility, `Psi: R -> {0,1}`, where `1` means the task succeeds and `0` means it fails.

**中文答案：** 它把每条运行映射到布尔效用 `Psi: R -> {0,1}`，其中 `1` 表示任务成功，`0` 表示失败。

### Achievement Task
**English question:** What is an achievement task?

**中文问题：** 什么是达成型任务？

**English answer:** It is specified by a set of good goal states `G`; the agent succeeds if it can force the environment into at least one state in `G`.

**中文答案：** 它由一组好的目标状态 `G` 定义；如果智能体能保证环境进入 `G` 中至少一个状态，就算成功。

### Maintenance Goal
**English question:** What is a maintenance goal?

**中文问题：** 什么是维持型目标？

**English answer:** It is specified by a set of bad states `B`; the agent succeeds if it avoids all states in `B`.

**中文答案：** 它由一组坏状态 `B` 定义；智能体若能避免所有 `B` 中的状态，就算成功。

### Expected Utility
**English question:** How is expected utility used to compare agents?

**中文问题：** 如何用期望效用比较智能体？

**English answer:** For each possible run, multiply the run's probability by its utility, then sum these products. The agent with the larger expected utility is optimal with respect to that environment and utility function.

**中文答案：** 对每条可能运行，用运行概率乘以运行效用，再把这些乘积求和。期望效用更大的智能体相对于该环境和效用函数是最优的。

## Frequency 2/3: Social Choice and Voting

### Borda Count
**English question:** What is Borda count?

**中文问题：** 什么是 Borda 计数？

**English answer:** With `k` outcomes, first choice receives `k-1` points, second receives `k-2`, and so on; the candidate with the highest total score wins.

**中文答案：** 若有 `k` 个结果，第一名得 `k-1` 分，第二名得 `k-2` 分，依此类推；总分最高者获胜。

### Alternative Vote
**English question:** What is alternative vote?

**中文问题：** 什么是 alternative vote？

**English answer:** Count first choices; if no candidate has a majority, eliminate the candidate with the fewest votes and transfer those ballots until someone reaches a majority.

**中文答案：** 先数第一选择；若无人过半，就淘汰得票最少者并转移其选票，直到某个候选人过半。

### Sequential Majority Election
**English question:** What is a sequential majority election?

**中文问题：** 什么是顺序多数选举？

**English answer:** Alternatives are compared pairwise according to a linear agenda; the winner of one contest faces the next alternative until a final winner remains.

**中文答案：** 候选项按照线性议程进行两两多数对决；每轮胜者继续与下一个候选项对决，直到产生最终赢家。

### Possible Winner
**English question:** What is a possible winner in a sequential majority election?

**中文问题：** 顺序多数选举中的 possible winner 是什么？

**English answer:** An outcome is a possible winner if there exists at least one agenda under which it becomes the final winner.

**中文答案：** 如果存在至少一个议程能使某个结果最终获胜，那么它就是 possible winner。

### Condorcet Winner
**English question:** What is a Condorcet winner?

**中文问题：** 什么是 Condorcet winner？

**English answer:** A Condorcet winner beats every other outcome in pairwise majority contests; equivalently, it wins under every possible sequential majority agenda.

**中文答案：** Condorcet winner 是在两两多数对决中击败所有其他结果的候选人；等价地，它在每一种可能的顺序多数议程下都会获胜。

## Frequency 2/3: Negotiation, Auctions, and Strategic Interaction

### Monotonic Concession Protocol
**English question:** What are the main rules of the Monotonic Concession Protocol?

**中文问题：** 单调让步协议的主要规则是什么？

**English answer:** Agents simultaneously propose deals. Agreement occurs if one proposal is at least as good as the agent's own. Otherwise negotiation continues, later offers cannot be worse for the opponent than previous offers, and if neither agent concedes, negotiation ends with the conflict deal.

**中文答案：** 双方同时提出交易；若一方认为对方提议至少和自己的提议一样好，则达成协议；否则继续谈判，后续提议不能比上一轮更不利于对方；若双方都不让步，则以冲突结果结束。

### Zeuthen Strategy
**English question:** In the Zeuthen strategy, who should concede and how much?

**中文问题：** Zeuthen 策略中谁应该让步，应该让步多少？

**English answer:** The agent least willing to risk conflict should concede, usually the one with more to lose. It should concede just enough to change the balance of risk.

**中文答案：** 最不愿冒冲突风险的一方应该让步，通常是谈判失败时损失更大的一方。让步幅度应刚好足以改变风险平衡。

### Vickrey Auction
**English question:** Why is truthful bidding a dominant strategy in a Vickrey auction?

**中文问题：** 为什么 Vickrey 拍卖中真实报价是占优策略？

**English answer:** Overbidding can make the bidder win while paying more than its true value. Underbidding can make it lose an item it would profit from winning, while winning still pays the second-highest bid.

**中文答案：** 报高可能导致赢得物品但支付超过真实价值而亏损；报低可能错失本可获利的物品，而赢了时支付仍由第二高价决定。

## Frequency 2/3: Coordination, Social Behaviour, and Agent Architectures

### Subsumption Architecture Rules
**English question:** What rules support Mars rock-gathering agents in a subsumption architecture?

**中文问题：** subsumption 架构下火星采石智能体使用哪些规则？

**English answer:** Typical rules include avoiding obstacles, dropping samples at the base, travelling up the base gradient when carrying a sample, picking up detected samples, and random exploration when no higher-priority rule applies.

**中文答案：** 典型规则包括避障、到基地放下样本、带样本时沿基地梯度返回、检测到样本就拾取、没有更高优先级规则时随机探索。

### Stigmergy
**English question:** How do radioactive particles support stigmergy?

**中文问题：** 放射性粒子如何支持 stigmergy（环境中的隐式通信）？

**English answer:** An agent leaves a trail when returning from a sample cluster. Other agents follow the trail to find more samples, and the trail fades as particles are picked up after the cluster is exhausted.

**中文答案：** 智能体从样本簇返回时留下轨迹，其他智能体沿轨迹找到更多样本；样本耗尽后，粒子逐渐被捡起，轨迹随之消失。

### Social Law
**English question:** What is a social law in a multi-agent system?

**中文问题：** 多智能体系统中的 social law 是什么？

**English answer:** A social law is a set of constraints forbidding certain actions in certain environment states, used to coordinate agents while preserving reachability between important focal states.

**中文答案：** social law 是一组约束，禁止智能体在某些环境状态下执行某些动作，用于协调行为，同时保持重要焦点状态之间的可达性。

## Frequency 1/3: Ontologies, Speech Acts, and Agent Platforms

### Upper Ontology
**English question:** What is an upper ontology?

**中文问题：** 什么是上层本体？

**English answer:** It defines very general categories such as living things, non-living things, fluents, and endurants.

**中文答案：** 它定义最一般的类别，例如生物、非生物、流变对象、持存对象等。

### Domain Ontology
**English question:** What is a domain ontology?

**中文问题：** 什么是领域本体？

**English answer:** It defines concepts for a specific domain, often reusing an upper ontology; for example, medical terminology for medical applications.

**中文答案：** 它定义某一特定领域中的概念，通常复用上层本体，例如医学应用中的医学术语。

### Application Ontology
**English question:** What is an application ontology?

**中文问题：** 什么是应用本体？

**English answer:** It defines concepts needed by one specific application and is usually less reusable outside that application.

**中文答案：** 它定义某个具体应用需要的概念，通常只在该应用内部有用，复用性较低。

### Representative Speech Acts
**English question:** What are representative speech acts?

**中文问题：** 什么是陈述类言语行为（representatives）？

**English answer:** They inform the hearer of a fact, such as saying that it is raining.

**中文答案：** 它们用于告知事实，例如“正在下雨”。

### Directive Speech Acts
**English question:** What are directive speech acts?

**中文问题：** 什么是指令类言语行为（directives）？

**English answer:** They ask or direct another agent to do something, such as asking it to make tea.

**中文答案：** 它们用于要求或指示另一个智能体做某事，例如要求它泡茶。

### Commissive Speech Acts
**English question:** What are commissive speech acts?

**中文问题：** 什么是承诺类言语行为（commissives）？

**English answer:** They commit the speaker to a future action, such as promising to make tea.

**中文答案：** 它们表示说话者承诺将来执行某事，例如承诺会泡茶。

### JADE Agent Management System
**English question:** What is the JADE Agent Management System?

**中文问题：** JADE 中的 Agent Management System 是什么？

**English answer:** The AMS manages agent names and identifiers, creates and destroys agents, and controls the platform.

**中文答案：** AMS 管理智能体名称和标识符，负责创建和销毁智能体，并控制平台。

### JADE Directory Facilitator
**English question:** What is the JADE Directory Facilitator?

**中文问题：** JADE 中的 Directory Facilitator 是什么？

**English answer:** The DF is a yellow-pages service where agents register services and discover other agents by service.

**中文答案：** DF 类似黄页服务，智能体可注册自己的服务，也可按服务查找其他智能体。
