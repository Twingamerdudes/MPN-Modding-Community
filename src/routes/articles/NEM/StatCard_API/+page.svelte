<div class="intro">
    <h1 id="statcard_api">StatCard_API</h1>
    <p><strong>Made for modders by modders</strong></p>
    <p class="Explanation">A collection of all the StatCards in the game, with their respective properties and functions.</p>
</div>
<div class="links">
    <a href="/articles/NEM/StatCard_API">Article</a>
    <a href="/articles/NEM/StatCard_API/Discussion">Discussion</a>
</div>
<div class="content">


    <h1 id="contents">Contents</h1>
    <p>Some links put you slighty downwards, scroll up a bit to see the full statcard.</p>
    <ul>
    <li><p>StatCard_Base</p></li>
    <li><p><a href="#statcard_animation">StatCard_Animation</a></p></li>
    <li><p><a href="#statcard_animset">StatCard_AnimSet</a></p></li>
    <li><p><a href="#statcard_character">StatCard_Character</a></p></li>
    <li><p><a href="#statcard_chatter">StatCard_Chatter</a></p></li>
    <li><p><a href="#statcard_corpus">StatCard_Corpus</a></p></li>
    <li><p><a href="#statcard_dot">StatCard_DoT</a></p></li>
    <li><p>StatCard_Event</p></li>
    <li><p><a href="#statcard_execution">StatCard_Execution</a></p></li>
    <li><p><a href="#statcard_explosion">StatCard_Explosion</a></p></li>
    <li><p><a href="#statcard_item">StatCard_Item</a></p>
    <ul>
    <li><p><a href="#statcard_armor">StatCard_Armor</a></p></li>
    <li><p><a href="#statcard_collectible">StatCard_Collectible</a></p></li>
    <li><p><a href="#statcard_consumable">StatCard_Consumable</a></p></li>
    <li><p><a href="#statcard_weapon">StatCard_Weapon</a></p>
    <ul>
    <li><p><a href="#statcard_weaponmodded">StatCard_WeaponModded</a></p></li>
    <li><p><a href="#statcard_weaponstats_base">StatCard_WeaponStats_Base</a></p>
    <ul>
    <li><p><a href="#statcard_ammo">StatCard_Ammo</a></p></li>
    <li><p><a href="#statcard_weaponstats_additional">StatCard_WeaponStats_Additional</a></p>
    <ul>
    <li><p><a href="#statcard_ranged">StatCard_Ranged</a></p></li>
    <li><p><a href="#statcard_thrown">StatCard_Thrown</a></p></li>
    <li><p><a href="#statcard_weaponaddon">StatCard_WeaponAddon</a></p></li>
    </ul></li>
    </ul></li>
    </ul></li>
    </ul></li>
    <li><p>StatCard_ItemQuality</p></li>
    <li><p><a href="#statcard_loadout">StatCard_Loadout</a></p></li>
    <li><p><a href="#statcard_loadout_wardrobe">StatCard_Loadout_Wardrobe</a></p></li>
    <li><p><a href="#statcard_mission">StatCard_Mission</a></p></li>
    <li><p><a href="#statcard_objective">StatCard_Objective</a></p></li>
    <li><p>StatCard_Origin</p></li>
    <li><p><a href="#statcard_skill">StatCard_Skill</a></p></li>
    <li><p><a href="#statcard_skillgroup">StatCard_SkillGroup</a></p></li>
    <li><p><a href="#statcard_skilltree">StatCard_SkillTree</a></p></li>
    <li><p><a href="#statcard_skin">StatCard_Skin</a></p></li>
    <li><p><a href="#statcard_soundpack">StatCard_SoundPack</a></p></li>
    <li><p>StatCard_Squad</p></li>
    <li><p><a href="#statcard_stage">StatCard_Stage</a></p>
    <ul>
    <li><p><a href="#statcard_stage_arena">StatCard_Stage_Arena</a></p></li>
    <li><p><a href="#statcard_stage_story">StatCard_Stage_Story</a></p></li>
    </ul></li>
    <li><p><a href="#statcard_swatch">StatCard_Swatch</a></p></li>
    <li><p><a href="#statcard_textures">StatCard_Textures</a></p></li>
    <li><p><a href="#statcard_voiceset">StatCard_VoiceSet</a></p></li>
    <li><p>StatCard_Wave</p></li>
    <li><p><a href="#statcard_weaponaddongroup">StatCard_WeaponAddonGroup</a></p></li>
    <li><p>StatCard_XP</p></li>
    </ul>
    <h1 id="statcard_ammo">StatCard_Ammo</h1>
    <p>The physical representation of a bullet discharged from a ranged weapon.</p>
    <p>Extends StatCard_WeaponStats_Base</p>
    <p> </p>
    <p><strong>BecomeDebrisOnHit:</strong> <em>&lt;bool&gt;</em></p>
    <p>If enabled, bullet becomes a physical object on impact.</p>
    <p> </p>
    <p><strong>Bullet:</strong> <em>&lt;GameObject&gt;</em></p>
    <p>The bullet object</p>
    <p> </p>
    <p><strong>Casing:</strong> <em>&lt;GameObject&gt;</em></p>
    <p>The casing object ejected from the weapon</p>
    <p> </p>
    <p><strong>CasingSound:</strong> <em>&lt;string&gt;</em></p>
    <p>Path directory for the casing sound effect</p>
    <p> </p>
    <p><strong>DamageOverTimeEffect:</strong> <em>&lt;</em><a href="#_StatCard_DOT"><em>StatCard_DoT</em></a><em>&gt;</em></p>
    <p>The Damage Over Time effect to apply on impact with a valid target</p>
    <p> </p>
    <p><strong>DamageType:</strong> <em>&lt;</em><a href="#_DamageType"><em>DamageType</em></a><em>&gt;</em></p>
    <p>Affects how a target will react to damage</p>
    <p> </p>
    <p><strong>DefaultPickupAount:</strong> <em>&lt;int&gt;</em></p>
    <p>Deprecated: How much ammo is picked up when walked over</p>
    <p> </p>
    <p><strong>DeflectBulletEffect:</strong> <em>&lt;GameObject&gt;</em></p>
    <p>Particle effect when bullet bounces off of something</p>
    <p> </p>
    <p><strong>ExplodeInSeconds:</strong> <em>&lt;float&gt;</em></p>
    <p>If object has Explosion property, object will detonate after this amount of time (60 = 1 second)</p>
    <p> </p>
    <p><strong>Explosion:</strong> <em>&lt;</em><a href="#_StatCard_Explosion"><em>StatCard_Explosion</em></a><em>&gt;</em></p>
    <p>Bullet will explode and remove itself with this effect.</p>
    <p> </p>
    <p><strong>Flare:</strong> <em>&lt;GameObject&gt;</em></p>
    <p>Particle effect attached to this bullet after hitting a target</p>
    <p>BecomeDebrisOnHit must be enabled for this to apply</p>
    <p> </p>
    <p><strong>GravityMultiplier:</strong> <em>&lt;float&gt;</em></p>
    <p>How much gravity drops this bullet</p>
    <p> </p>
    <p><strong>Heatseek:</strong> <em>&lt;float&gt;</em></p>
    <p>The level of strength that this bullet will guide itself towards its target, 0 = no heatseeking</p>
    <p> </p>
    <p><strong>HitCharacterSplosion:</strong> <em>&lt;GameObject&gt;</em></p>
    <p>The impact effect when bullet has hit a valid target</p>
    <p> </p>
    <p><strong>ImpactSound:</strong> <em>&lt;string&gt;</em></p>
    <p>The sound effect when bullet has hit a surface</p>
    <p> </p>
    <p><strong>ImpactSplosion:</strong> <em>&lt;GameObject&gt;</em></p>
    <p>The impact effect when bullet has hit a surface</p>
    <p> </p>
    <p><strong>ImpactUsesBulletNormal:</strong> <em>&lt;bool&gt;</em></p>
    <p>If enabled, <em>ImpactSplosion</em> will be oriented based on bullets facing; otherwise will use surface normal</p>
    <p> </p>
    <p><strong>NoSFXOnHit:</strong> <em>&lt;bool&gt;</em></p>
    <p>If enabled, character will not play sound specified by <em>HitByWeaponSFX</em> when hit by this bullet</p>
    <p> </p>
    <p><strong>Shots:</strong> <em>&lt;int&gt;</em></p>
    <p>The amount of bullets fired per shot (i.e buckshot)</p>
    <p> </p>
    <p><strong>ShotSpread:</strong> <em>&lt;float&gt;</em></p>
    <p>Random guassian for amount of spread of duplicate shots, 0 = no spread</p>
    <p> </p>
    <p><strong>Speed:</strong> <em>&lt;float&gt;</em></p>
    <p>The speed of this projectile</p>
    <p> </p>
    <p><strong>SpeedBoost:</strong> <em>&lt;Vector2&gt;</em></p>
    <p> </p>
    <h1 id="statcard_animation">StatCard_Animation</h1>
    <p>A character animation with adjustable parameters based on the context of its use</p>
    <p>Extends StatCard_Base</p>
    <p><strong>myClips:</strong> <em>&lt;AnimationClip&gt;[]</em></p>
    <p>List of animation clips</p>
    <p><strong>myGroups:</strong> <em>&lt;</em><a href="#_StatCard_Base"><em>StatCard_Animation</em></a><em>&gt;[]</em></p>
    <p><strong>myPairs:</strong> <em>&lt;AnimationClipPair&gt;[]</em></p>
    <p><strong>ArbitraryBools:</strong> <em>&lt;bool&gt;[]</em></p>
    <p><strong>ArbitraryFloats:</strong> <em>&lt;float&gt;[]</em></p>
    <h1 id="statcard_animset">Statcard_AnimSet</h1>
    <p>A list of animations used by a character; Includes properties to override certain animations that will otherwise default or be non-existent if unspecified.</p>
    <p>Animations must be compatible with the specified property to function properly.</p>
    <p>Extends StatCard_Base</p>
    <p><strong>IdleAnimation:</strong> <em>&lt;</em><a href="#_StatCard_Animation"><em>StatCard_Animation</em></a><em>&gt;</em></p>
    <p>The looping idle animation of this character</p>
    <p> </p>
    <p><strong>WalkAnimation:</strong> <em>&lt;</em><a href="#_StatCard_Animation"><em>StatCard_Animation</em></a><em>&gt;</em></p>
    <p>The steady walking animation of this character (used for walk aiming and blocking)</p>
    <p> </p>
    <p><strong>RunAnimation:</strong> <em>&lt;</em><a href="#_StatCard_Animation"><em>StatCard_Animation</em></a><em>&gt;</em></p>
    <p>The standard walking animation of this character</p>
    <p> </p>
    <p><strong>DashAnimation:</strong> <em>&lt;</em><a href="#_StatCard_Animation"><em>StatCard_Animation</em></a><em>&gt;</em></p>
    <p>The dashing animation of this character; determined by Dash skill if unspecified</p>
    <p> </p>
    <p><strong>StunAnimations:</strong> <em>&lt;</em><a href="#_StatCard_Animation"><em>StatCard_Animation</em></a><em>&gt;[]</em></p>
    <p>An array specifying the stun animations that play.</p>
    <p>Array always contains two elements, the first being the stun animation for the body, the second for the head</p>
    <p> </p>
    <p><strong>DeathAnimations:</strong> <em>&lt;</em><a href="#_StatCard_Animation"><em>StatCard_Animation</em></a><em>&gt;[]</em></p>
    <p>An array specifying the death animations that play.</p>
    <p>Array always contains two elements, the first being the stun animation for the body, the second for the head</p>
    <p>If array is empty, character will simply ragdoll on death</p>
    <p> </p>
    <p><strong>PickupAnimation:</strong> <em>&lt;</em><a href="#_StatCard_Animation"><em>StatCard_Animation</em></a><em>&gt;</em></p>
    <p>Override animation for picking up a weapon; determined by Pickup Leaping skill if unspecified</p>
    <p> </p>
    <p><strong>StandUp:</strong> <em>&lt;</em><a href="#_StatCard_Animation"><em>StatCard_Animation</em></a><em>&gt;</em></p>
    <p>The ragdoll recovery animation; determined by Fast Get-up skill if unspecified.</p>
    <p> </p>
    <p><strong>FallLand:</strong> <em>&lt;</em><a href="#_StatCard_Animation"><em>StatCard_Animation</em></a><em>&gt;</em></p>
    <p>The fall landing animation; determined by Fall Tumble and Fall Roll skills if unspecified.</p>
    <p> </p>
    <p><strong>IdleEmotes:</strong> <em>&lt;</em><a href="#_StatCard_Animation"><em>StatCard_Animation</em></a><em>&gt;</em></p>
    <p>AI emotes played at random intervals when status is set to unaware.</p>
    <p>Animation chosen at random from <strong>myClips</strong> property of Statcard_Animation</p>
    <p> </p>
    <p><strong>HuntingEmotes:</strong> <em>&lt;</em><a href="#_StatCard_Animation"><em>StatCard_Animation</em></a><em>&gt;</em></p>
    <p>AI emotes played after navigating to random point when status is set to aware.</p>
    <p>Animation chosen at random from <strong>myClips</strong> property of Statcard_Animation</p>
    <p> </p>
    <p><strong>WakeupEmotes:</strong> <em>&lt;</em><a href="#_StatCard_Animation"><em>StatCard_Animation</em></a><em>&gt;</em></p>
    <p>AI emotes played when acquiring a target.</p>
    <p>Animation chosen at random from <strong>myClips</strong> property of Statcard_Animation</p>
    <p>This emote will be ignored if AI has <strong>unphased</strong> trait</p>
    <p> </p>
    <p><strong>CombatEmotes:</strong> <em>&lt;</em><a href="#_StatCard_Animation"><em>StatCard_Animation</em></a><em>&gt;</em></p>
    <p>AI emotes played when they have either killed or incapacitated (ragdolled) their target</p>
    <p>Animation chosen at random from <strong>myClips</strong> property of Statcard_Animation</p>
    <p> </p>
    <p><strong>AngryEmotes:</strong> <em>&lt;</em><a href="#_StatCard_Animation"><em>StatCard_Animation</em></a><em>&gt;</em></p>
    <p>AI emotes played before applying angry charger status</p>
    <p>Animation chosen at random from <strong>myClips</strong> property of Statcard_Animation</p>
    <p>AI must have a variant of AngryCharger behavior for this emote to play.</p>
    <p> </p>
    <p><strong>Override_Unarmed:</strong> <em>&lt;</em><a href="#_StatCard_Animation"><em>StatCard_Animation</em></a><em>&gt;</em></p>
    <p>Override for unarmed attacks; if not specified, will be determined based on core unarmed skill level.</p>
    <p> </p>
    <p><strong>Override_Melee:</strong> <em>&lt;</em><a href="#_StatCard_Animation"><em>StatCard_Animation</em></a><em>&gt;</em></p>
    <p>Override for one handed melee attacks; if not specified, will be determined based on core melee skill level.</p>
    <p>Character will use weapons <em>UsageAnimation</em> if core melee skill &gt;= <em>UsageAnim_CoreLevelRequired</em></p>
    <p> </p>
    <p><strong>Override_Melee2h:</strong> <em>&lt;</em><a href="#_StatCard_Animation"><em>StatCard_Animation</em></a><em>&gt;</em></p>
    <p>Override for two handed melee attacks; if not specified, will be determined based on core melee skill level.</p>
    <p>Character will use <em>weapons UsageAnimation2xHand</em> if core melee skill &gt;= <em>UsageAnim_CoreLevelRequired</em></p>
    <p> </p>
    <p><strong>Override_Ranged:</strong> <em>&lt;</em><a href="#_StatCard_Animation"><em>StatCard_Animation</em></a><em>&gt;</em></p>
    <p>Override for ranged weapon attacks; if not specified, will be determined based on core ranged skill level.</p>
    <p> </p>
    <p><strong>Override_Shove:</strong> <em>&lt;</em><a href="#_StatCard_Animation"><em>StatCard_Animation</em></a><em>&gt;</em></p>
    <p>Override for special strike. If not specified, will be determined by Special Strike and Better Special Strike skills.</p>
    <p> </p>
    <p><span style="mso-spacerun:yes"></span><strong>Override_Block:</strong> <em>&lt;</em><a href="#_StatCard_Animation"><em>StatCard_Animation</em></a><em>&gt;</em></p>
    <p>Override for blocking attacks. If not specified, will be determined whether or not character is unarmed.</p>
    <p> </p>
    <p><strong>Override_ChargeUp:</strong> <em>&lt;</em><a href="#_StatCard_Animation"><em>StatCard_Animation</em></a><em>&gt;</em></p>
    <p>Override for charged up attacks. If not specified, will be determined whether or not character is unarmed.</p>
    <p> </p>
    <p><strong>Override_DashAttack:</strong> <em>&lt;</em><a href="#_StatCard_Animation"><em>StatCard_Animation</em></a><em>&gt;</em></p>
    <p>Override for dash attacks. If not specified, will be determined by Dash Attack and Heavy Dash Attack skills.</p>
    <p> </p>
    <p><strong>Override_DashSpecial:</strong> <em>&lt;</em><a href="#_StatCard_Animation"><em>StatCard_Animation</em></a><em>&gt;</em></p>
    <p>Special dash attack used by angry chargers.</p>
    <p>Character must have AngryCharger behavior to use this animation.</p>
    <p> </p>
    <p><strong>Override_Dodge:</strong> <em>&lt;</em><a href="#_StatCard_Animation"><em>StatCard_Animation</em></a><em>&gt;</em></p>
    <p>Override dodge animation. If not specified, will be determined based on core acrobatic skill level <strong>(does not apply to snap-dodge)</strong></p>
    <p> </p>
    <p><strong>Override_Grapple:</strong> <em>&lt;</em><a href="#_StatCard_Animation"><em>StatCard_Animation</em></a><em>&gt;</em></p>
    <p>Grapple to apply when has target in a grapple; does not apply to sword locks.</p>
    <p> </p>
    <p><strong>HandsTied_Unarmed:</strong> <em>&lt;</em><a href="#_StatCard_Animation"><em>StatCard_Animation</em></a><em>&gt;</em></p>
    <p>Unarmed attacks if character is wearing an armor item with NoHands trait.</p>
    <p> </p>
    <p><strong>BullRush:</strong> <em>&lt;</em><a href="#_StatCard_Animation"><em>StatCard_Animation</em></a><em>&gt;</em></p>
    <p>Animation for bullrush attacks</p>
    <p>Character must have AngryCharger_Bullrush behavior to use this animation.</p>
    <p> </p>
    <p><strong>RearSmash:</strong> <em>&lt;</em><a href="#_StatCard_Animation"><em>StatCard_Animation</em></a><em>&gt;</em></p>
    <p>Animation to perform when target is directly behind them.</p>
    <p>Character must have RearSmash behavior to use this animation.</p>
    <p> </p>
    <p><strong>SpawnIn:</strong> <em>&lt;</em><a href="#_StatCard_Animation"><em>StatCard_Animation</em></a><em>&gt;</em></p>
    <p>Animation played when character spawns in without using an available entrance.</p>
    <p>Is typically used for characters with the NinjaSpawn trait.</p>
    <p> </p>
    <p><strong>Special_Angry:</strong> <em>&lt;</em><a href="#_StatCard_Animation"><em>StatCard_Animation</em></a><em>&gt;</em></p>
    <p>Animation played if character has been hit 5 times in rapid succession.</p>
    <p>Character must have H2HAngry trait to use this animation.</p>
    <p> </p>
    <p><strong>FootstepAudio:</strong> <em>&lt;string&gt;[]</em></p>
    <p>Array specifying audio directories for footstep sounds.</p>
    <p> </p>
    <p><strong>FallLandAudio:</strong> <em>&lt;string&gt;[]</em></p>
    <p>Array specifying audio directories for landing sound effects.</p>
    <p>Array always have 3 sizes, and specifies sounds based on fall height, from shortest to greatest.</p>
    <p> </p>
    <h1 id="statcard_armor">StatCard_Armor</h1>
    <p>Armor and clothing that characters can wear, can apply bonuses and encumbrance, and can affect a characters fighting ability.</p>
    <p>Extends StatCard_Item</p>
    <p> </p>
    <p><strong>ArmorRating:</strong> <em>&lt;Vector2&gt;</em></p>
    <p>Armor rating applied to the character based on slot position; x value of Vector determines armor value</p>
    <p> </p>
    <p><strong>DeathEvents:</strong> List<em>&lt;</em><a href="#_DeathEvents"><em>DeathEvents</em></a><em>&gt;</em></p>
    <p>Death events that occur in sequence when a character dies and is resurrected; The character dies if its current death event fails, or armor is broken and/or removed.</p>
    <p> </p>
    <p><strong>DisablePartOnEquip:</strong> <em>&lt;bool&gt;</em></p>
    <p> </p>
    <p><strong>Encumbrance:</strong> <em>&lt;float&gt;</em></p>
    <p>The amount of encumbrance this item encumbers</p>
    <p>Only applies to characters with CountWornArmor enabled</p>
    <p>If encumbrance goes over characters max encumbrance, character has their core acro and tac bar downgraded</p>
    <p> </p>
    <p><strong>Executions:</strong> <em>&lt;</em><a href="#_StatCard_Execution"><em>StatCard_Execution</em></a><em>&gt;[]</em></p>
    <p>The type of executions performed while wearing this armor; executions will be disabled if armor is removed or broken</p>
    <p> </p>
    <p><strong>MaterialSets:</strong> <em>List&lt;MaterialSet&gt;</em></p>
    <p>Array of Materials used for each corresponding element in <em>MeshSets</em></p>
    <p> </p>
    <p><strong>MeshSets:</strong> <em>List&lt;Mesh&gt;</em></p>
    <p>Array of Meshes used for alternate styles, MeshSet[0] = default style</p>
    <p> </p>
    <p><strong>Slot:</strong> <em>&lt;Catalog_Armor.ArmorSlots[]&gt;</em></p>
    <p>The slot that this armor is attached to on a character</p>
    <p> </p>
    <p><strong>Swatch_Pairs:</strong> <em>List&lt;</em><a href="#_ColorPair"><em>ColorPair</em></a><em>&gt;</em></p>
    <p>Available swatches to this armor, affects primary and secondary colors</p>
    <p> </p>
    <p><strong>Swatch_Solos:</strong> <em>List&lt;</em><a href="#_ColorSolo"><em>ColorSolo</em></a><em>&gt;</em></p>
    <p>Available swatches to this armor, affects glass colors</p>
    <p> </p>
    <p><strong>Tint_Primary:</strong> <em>List&lt;Color&gt;</em></p>
    <p>List of default primary colors for this outfit. If empty, cannot have colorpair swatches applied.</p>
    <p>If not listed as a part of a uniform, primary color will be chosen from this list at random</p>
    <p> </p>
    <p><strong>Tint_Secondary:</strong> <em>List&lt;Color&gt;</em></p>
    <p>List of default secondary colors for this outfit. If empty, cannot have colorpair swatches applied.</p>
    <p>If not listed as a part of a uniform, secondary color will be chosen from this list at random</p>
    <p> </p>
    <p><strong>Tint_Glass:</strong> <em>List&lt;Color&gt;</em></p>
    <p>List of default glass colors for this outfit. If empty, cannot have colorsolo swatches applied.</p>
    <p>If not listed as a part of a uniform, glass color will be chosen from this list at random</p>
    <p> </p>
    <p><strong>Traits:</strong> <em>List&lt;</em><a href="#_ArmorTraits"><em>ArmorTraits</em></a>&gt;*</p>
    <p>Physical traits attached to this armor, applies regardless of <em>CountWornArmor</em> on character</p>
    <h1 id="statcard_base">StatCard_Base</h1>
    <p>The Base representation for all StatCards</p>
    <p> </p>
    <p><strong>FullName:</strong> <em>&lt;string&gt;</em></p>
    <p>The full name of this object, used in official references to this stat card.</p>
    <p> </p>
    <p><strong>ShortName:</strong> <em>&lt;string&gt;</em></p>
    <p>The short-hand name of this object, used for quick references to this stat card.</p>
    <p> </p>
    <p><strong>Description:</strong> <em>&lt;string&gt;</em></p>
    <p>A brief summary of this statcard.</p>
    <h1 id="statcard_character">StatCard_Character</h1>
    <p>Profile for a grunt combatant</p>
    <p>Extends StatCard_Base</p>
    <p> </p>
    <p><strong>AlternateParts:</strong> <em>&lt;Part_BodyPart&gt;[]</em></p>
    <p>Array of alternate parts swapped out with the characters model (<strong>must be compatible with model itself</strong>).</p>
    <p> </p>
    <p><strong>AnimationSet:</strong> <em>&lt;</em><a href="#_Statcard_AnimSet"><em>StatCard_AnimSet</em></a><em>&gt;</em></p>
    <p>The animation set used by this character</p>
    <p> </p>
    <p><strong>ArmorHead:</strong> <em>&lt;Vector2&gt;</em></p>
    <p>The natural armor value to this characters head; x value of Vector determines armor value (<strong>Ignored if CountWornArmor is true</strong>).</p>
    <p> </p>
    <p><strong>ArmorBody:</strong> <em>&lt;Vector2&gt;</em></p>
    <p>The natural armor value to this characters torso; x value of Vector determines armor value (<strong>Ignored if CountWornArmor is true</strong>).</p>
    <p> </p>
    <p><strong>Attributes:</strong> <em>&lt;int&gt;[]</em></p>
    <p>A 4-element array specifying the characters attributes in the following order: Strength, Endurance, Dexterity, Tactics</p>
    <p> </p>
    <p><strong>Behaviors:</strong> <em>&lt;</em><a href="#_BehaviorList"><em>BehaviorList</em></a><em>&gt;[]</em></p>
    <p>Behavior modules applied to this character when AI controlled.</p>
    <p> </p>
    <p><strong>Blood:</strong> <em>&lt;Color&gt;</em></p>
    <p>The color of this characters blood.</p>
    <p> </p>
    <p><strong>BloodSpray:</strong> <em>&lt;</em><a href="#_StatCard_Textures"><em>StatCard_Textures</em></a><em>&gt;</em></p>
    <p>The decal applied to world geometry when this character bleeds sufficiently</p>
    <p> </p>
    <p><strong>BloodSpurt:</strong> <em>&lt;GameObject&gt;</em></p>
    <p>Blood effect when character is wounded</p>
    <p> </p>
    <p><strong>CharacterEnabled:</strong> <em>&lt;bool&gt;</em></p>
    <p>If enabled, character can be spawned in the playground</p>
    <p> </p>
    <p><strong>CorpusBlocks:</strong> <em>&lt;</em><a href="#_StatCard_Corpus"><em>StatCard_Corpus</em></a><em>&gt;[]</em></p>
    <p>Array of corpus blocks for this character; first item in array is last corpus block to be broken.</p>
    <p> </p>
    <p><strong>CountWornArmor:</strong> <em>&lt;bool&gt;</em></p>
    <p>If enabled, character will use accumulative armor values and encumberance of all worn armor.</p>
    <p> </p>
    <p><strong>DeactivateTime:</strong> <em>&lt;float&gt;</em></p>
    <p>Time before character is considered deactivate, value of 60 = 1 second</p>
    <p>Only applies to characters with EffectOnDeactivate or VanishDeactivate traits</p>
    <p> </p>
    <p><strong>DefaultArmor:</strong> <em>&lt;</em><a href="#_StatCard_Armor"><em>StatCard_Armor</em></a><em>&gt;[]</em></p>
    <p>Armor applied to this character.</p>
    <p><em>If any armor pieces support colorization, all colors are randomly selected. See Uniform for customizable version.</em></p>
    <p><em>If an element is undefined, armor will not be applied.</em></p>
    <p> </p>
    <p><strong>DefaultControl:</strong> <em>&lt;Controller_Base&gt;</em></p>
    <p>The Default controller attached to this character, is hardly ever used.</p>
    <p> </p>
    <p><strong>DefaultFaction:</strong> <em>&lt;</em><a href="#_Factions"><em>Factions</em></a><em>&gt;</em></p>
    <p>The alleigiance of this character, will target anyone outside of their allegiance with the following exceptions:</p>
    <p>If set to <em>Player</em>, character will never target, nor can be harmed by the player</p>
    <p>If set to <em>Neutral</em>, character will never target, nor can be harmed by anyone</p>
    <p>If set to <em>None</em>, character will target everyone, and can be harmed by everyone, including anyone else set to None.</p>
    <p>Characters in a squad set to <em>None</em> will not target each other, but they are still prone to friendly fire</p>
    <p>Characters generated by arena waves are automatically set to <em>Enemy</em></p>
    <p> </p>
    <p><strong>DefaultLoadout:</strong> <em>&lt;</em><a href="#_StatCard_Loadout"><em>StatCard_Loadout</em></a><em>&gt;</em></p>
    <p>The default loadout of this playable character when loaded into a story mission.</p>
    <p> </p>
    <p><strong>DefaultPrimary:</strong> <em>&lt;</em><a href="#_StatCard_Weapon"><em>StatCard_Weapon</em></a><em>&gt;</em></p>
    <p>The primary weapon of this character. If generated in arena, will not be overridden by stage.</p>
    <p> </p>
    <p><strong>DefaultSecondary:</strong> <em>&lt;</em><a href="#_StatCard_Weapon"><em>StatCard_Weapon</em></a><em>&gt;</em></p>
    <p>Theweapon attached in the off-hand of this character; must have Dual Wield skill or DualWieldOverride trait.</p>
    <p> </p>
    <p><strong>DefaultSidearm:</strong> <em>&lt;</em><a href="#_StatCard_Weapon"><em>StatCard_Weapon</em></a><em>&gt;</em></p>
    <p>The secondary weapon on the characters back; will automatically equip to appropriate slot if shield or thrown</p>
    <p> </p>
    <p><strong>Executions_Defensive:</strong> <em>&lt;</em><a href="#_StatCard_Execution"><em>StatCard_Execution</em></a><em>&gt;[]</em></p>
    <p>The type of execution performed if an opponent performs an execution against this character; if not specified, will default to opponents execution.</p>
    <p> </p>
    <p><strong>Executions_Offensive:</strong> <em>&lt;</em><a href="#_StatCard_Execution"><em>StatCard_Execution</em></a><em>&gt;[]</em></p>
    <p>The type of execution this character performs on an opponent; if not specified, will default automatically to an appropriate exeucution.</p>
    <p> </p>
    <p><strong>FallLand:</strong> <em>&lt;GameObject&gt;</em></p>
    <p>Particle effects for when character lands from an egregious height.</p>
    <p> </p>
    <p><strong>Fist:</strong> <em>&lt;</em><a href="#_StatCard_Weapon"><em>StatCard_Weapon</em></a><em>&gt;</em></p>
    <p>The natural unarmed weapon attached to this character <strong>(Must be an unarmed weapon).</strong></p>
    <p> </p>
    <p><strong>Footprint:</strong> <em>&lt;Material&gt;</em></p>
    <p>Decal applied with each step when a character steps out of a pool of blood.</p>
    <p> </p>
    <p><strong>Gibs:</strong> <em>&lt;</em><a href="#_StatCard_Texture"><em>StatCard_Textures</em></a><em>&gt;</em></p>
    <p> </p>
    <p><strong>Headbutt:</strong> <em>&lt;</em><a href="#_StatCard_Weapon"><em>StatCard_Weapon</em></a><em>&gt;</em></p>
    <p>The unarmed weapon used for head butting (see Combat_U_Gestalt) <strong>(Must be an unarmed weapon).</strong></p>
    <p> </p>
    <p><strong>Health:</strong> <em>&lt;float&gt;</em></p>
    <p>The amount of health per corpus block.</p>
    <p> </p>
    <p><strong>HitByWeaponSFX:</strong> <em>&lt;string&gt;[]</em></p>
    <p>Array of sound directories for when character is damaged.</p>
    <p> </p>
    <p><strong>ItemGenres:</strong> List<em>&lt;</em><a href="#_ItemGenre"><em>ItemGenre</em></a><em>&gt;</em></p>
    <p>List of weapon genres that character is restricted to when generated by arena wave</p>
    <p> </p>
    <p><strong>Kick:</strong> <em>&lt;</em><a href="#_StatCard_Weapon"><em>StatCard_Weapon</em></a><em>&gt;</em></p>
    <p>The unarmed weapon used for kicking, typically special strikes <strong>(Must be an unarmed weapon).</strong></p>
    <p> </p>
    <p><strong>Level:</strong> <em>&lt;int&gt;</em></p>
    <p>The threat level of this character, typically determines reflexes, aggression, and arena weapon tier.</p>
    <p>At level 3, AI are eligible to pickup weapons if they dont have any</p>
    <p>At level 5, AI are eligible to be squad leaders; highest level is denoted as squad leader</p>
    <p> </p>
    <p><strong>LifeEffect:</strong> <em>&lt;GameObject&gt;</em></p>
    <p>Passive particle effect on this character</p>
    <p> </p>
    <p><strong>myRef:</strong> <em>&lt;GameObject&gt;</em></p>
    <p>The characters model</p>
    <p> </p>
    <p><strong>RemoveSkills:</strong> List<em>&lt;</em><a href="#_SkillsList"><em>SkillsList</em></a><em>&gt;</em></p>
    <p>Removes these skills from the characters skill groups.</p>
    <p> </p>
    <p><strong>Scale:</strong> <em>&lt;float&gt;</em></p>
    <p>Multiplier for the characters physical size, affects executions and health multiplier in Madness Mode.</p>
    <p> </p>
    <p><strong>SkillGroups:</strong> <em>&lt;</em><a href="#_StatCard_SkillGroup"><em>StatCard_SkillGroup</em></a><em>&gt;[]</em></p>
    <p>Array of skill groups applied to this character.</p>
    <p> </p>
    <p><strong>Skills:</strong> <em>&lt;</em><a href="#_SkillsList"><em>SkillsList</em></a><em>&gt;[]</em></p>
    <p>Array of skills applied to this character.</p>
    <p> </p>
    <p><strong>SlamExplode:</strong> <em>&lt;</em><a href="#_StatCard_Explosion"><em>StatCard_Explosion</em></a><em>&gt;[]</em></p>
    <p>Explosion referenced for certain animations (See Combat_U_Mag)</p>
    <p> </p>
    <p><strong>Speed:</strong> <em>&lt;Vector3&gt;[]</em></p>
    <p>Speed multiplier applied to this character after dexterity speed bonus is applied.</p>
    <p>X = Speed multiplier (default = 1)</p>
    <p>Y = multiplier for acceleration (character must have WalkPulse trait for this to apply)</p>
    <p>Z = multiplier for Deacceleration (character must have WalkPulse trait for this to apply)</p>
    <p> </p>
    <p><strong>Speed_SprintBonus:</strong> <em>&lt;float&gt;</em></p>
    <p>Multiplier for the characters dashing speed after athletics speed bonus is applied.</p>
    <p> </p>
    <p><strong>SwapMaterials:</strong> <em>&lt;StatCard_Character.</em><a href="#_MaterialSwaps"><em>MaterialSwap</em></a><em>&gt;[]</em></p>
    <p>Array of materials to be swapped on this character.</p>
    <p> </p>
    <p><strong>TacBar:</strong> <em>&lt;float&gt;</em></p>
    <p>Multiplier for the characters tac bar.</p>
    <p> </p>
    <p><strong>TeleportEffect:</strong> <em>&lt;GameObject&gt;</em></p>
    <p>Particle effect when character teleports.</p>
    <p> </p>
    <p><strong>TextChatter:</strong> <em>&lt;</em><a href="#_StatCard_Chatter"><em>StatCard_Chatter</em></a><em>&gt;</em></p>
    <p>Chatter applied to this character</p>
    <p> </p>
    <p><strong>Title:</strong> <em>&lt;string&gt;</em></p>
    <p>Role or Profession of this character, shown at the bottom of a characters profile menu.</p>
    <p> </p>
    <p><strong>Traits:</strong> <em>&lt;</em><a href="#_TraitsList"><em>TraitsList</em></a><em>&gt;[]</em></p>
    <p>Array of physical traits applied to this character.</p>
    <p> </p>
    <p><strong>UnarmedReplacement:</strong> <em>&lt;</em><a href="#_StatCard_Weapon"><em>StatCard_Weapon</em></a><em>&gt;</em></p>
    <p>If character is generated unarmed, will have this as a default weapon.</p>
    <p> </p>
    <p><strong>Uniform:</strong> <em>&lt;</em><a href="#_UniformWearable"><em>UniformWearable</em></a><em>&gt;[]</em></p>
    <p>Armor applied to this character, can be colorized and altered with different styles.</p>
    <p> </p>
    <p><strong>VariableArmor:</strong> <em>&lt;</em><a href="#_ArmorList"><em>ArmorList</em></a><em>&gt;[]</em></p>
    <p>Array of randomly selected armor lists.</p>
    <p><em>If any armor pieces support colorization, all colors are randomly selected. See Uniform for customizable version.</em></p>
    <p><em>If an element is undefined, armor will not be applied, useful for having No Armor as an option.</em></p>
    <p><strong>VariableTint:</strong> <em>List&lt;Color&gt;</em></p>
    <p>Tint color applied to head and hands of this character; tint is randomly selected from the list.</p>
    <p> </p>
    <p><strong>VariableTint2:</strong> <em>List&lt;Color&gt;</em></p>
    <p>Tint color applied to torso and feet of this character; tint is randomly selected from the list.</p>
    <p> </p>
    <p><strong>Vocations:</strong> <em>&lt;</em><a href="#_VocationsList"><em>VocationList</em></a><em>&gt;[]</em></p>
    <p>List of vocations this character has; affects world object interaction.</p>
    <p> </p>
    <p><strong>VoiceSet:</strong> <em>&lt;</em><a href="#_StatCard_VoiceSet"><em>StatCard_VoiceSet</em></a><em>&gt;</em></p>
    <p>The characters voice</p>
    <p><strong>WeaponPreference:</strong> &lt;<a href="#_WeaponCategories"><em>WeaponCategories</em></a><em>&gt;</em></p>
    <p>The type of weapon that this character will spawn with when generated by arena.</p>
    <p>If WeaponPreference is Unarmed, AI will not pick up weapons; will otherwise search for a matching weapon preference if empty handed.</p>
    <h3 id="materialswaps">MaterialSwaps</h3>
    <p> </p>
    <p><strong>materials:</strong> <em>&lt;Materials&gt;[]</em></p>
    <p>array of materials to swap</p>
    <p> </p>
    <p><strong>parts:</strong> <em>&lt;</em><a href="#_ModelParts"><em>ModelParts</em></a><em>&gt;[]</em></p>
    <p>Array of body parts to swap the corresponding materials with</p>
    <h1 id="statcard_chatter">StatCard_Chatter</h1>
    <p>Chatter is how a characters dialogue is written through either personal chatter or narration. The characters font and color can be customized for further personality.</p>
    <p>Extends StatCard_Base</p>
    <p> </p>
    <p><strong>Attacking:</strong> <em>&lt;string&gt;[]</em></p>
    <p>Line spoken at random when the character performs an attack.</p>
    <p> </p>
    <p><strong>Chasing:</strong> <em>&lt;string&gt;[]</em></p>
    <p>Line spoken at random when the character is chasing its target</p>
    <p> </p>
    <p><strong>Color:</strong> <em>&lt;Color&gt;</em></p>
    <p>The color of the characters dialogue.</p>
    <p> </p>
    <p><strong>Died:</strong> <em>&lt;string&gt;[]</em></p>
    <p>Line spoken at random when the character dies.</p>
    <p> </p>
    <p><strong>EnemyDown:</strong> <em>&lt;string&gt;[]</em></p>
    <p>Line spoken at random when the character has killed, or ragdolled a target.</p>
    <p> </p>
    <p><strong>Font:</strong> <em>&lt;Font&gt;</em></p>
    <p>The font of this characters dialogue</p>
    <p> </p>
    <p><strong>FriendDied:</strong> <em>&lt;string&gt;[]</em></p>
    <p>Line spoken at random when the character has witnessed an ally die.</p>
    <p>If character has Coward behavior, will use this line when an enemy gets too close and retreats.</p>
    <p> </p>
    <p><strong>Size:</strong> <em>&lt;int&gt;</em></p>
    <p>The size of the dialogue font.</p>
    <p> </p>
    <p><strong>Spawned:</strong> <em>&lt;string&gt;[]</em></p>
    <p>Line spoken at random when a character enters the room, or spots a new target while in combat</p>
    <p> </p>
    <p><strong>Style:</strong> <em>&lt;FontStyle&gt;</em></p>
    <p>Font style of this dialogue</p>
    <p> </p>
    <p><strong>Waiting:</strong> <em>&lt;string&gt;[]</em></p>
    <p>Line spoken at random when the character is queued for attacking a target.</p>
    <p> </p>
    <p><strong>WakeUp:</strong> <em>&lt;string&gt;[]</em></p>
    <p>Line spoken at random when the character spots a target while unaware or hunting</p>
    <p> </p>
    <p><strong>Wounded:</strong> <em>&lt;string&gt;[]</em></p>
    <p>Line spoken at random when the character is damaged</p>
    <h1 id="statcard_collectible">StatCard_Collectible</h1>
    <p>A story mode item that serves as a key for the player to pick up. Collectibles can be applied as requirements for interactive world objects orexecutions. When a collectible is added to the players inventory, any character in the players squad can use it.</p>
    <p>Extends StatCard_Item</p>
    <h1 id="statcard_consumable">StatCard_Consumable</h1>
    <p>A power up item that is automatically picked up by the player when approached.</p>
    <p>Extends StatCard_Item</p>
    <h1 id="statcard_corpus">StatCard_Corpus</h1>
    <p>The physical representation of a corpus block; can be given bonuses, damage multipliers, and ways to cheat death</p>
    <p>Extends StatCard_Base</p>
    <p> </p>
    <p><strong>BorderColor:</strong> <em>&lt;Color&gt;</em></p>
    <p>The color of the border surrounding this corpus block</p>
    <p> </p>
    <p><strong>DamageMultiplier:</strong> <em>&lt;float&gt;</em></p>
    <p>Multiplies total damage applied to this corpus block by this amount.</p>
    <p> </p>
    <p><strong>DeathEvents:</strong> List<em>&lt;</em><a href="#_DeathEvents"><em>DeathEvents</em></a><em>&gt;</em></p>
    <p>Death events that occur in sequence when a character dies and is resurrected; The character dies if its current death event fails.</p>
    <p> </p>
    <p><strong>DestroyEffect:</strong> <em>&lt;ParticleSystem&gt;</em></p>
    <p>UI particle effect when this corpus block is broken</p>
    <p> </p>
    <p><strong>HurtEffect:</strong> <em>&lt;ParticleSystem&gt;</em></p>
    <p>UI particle effect when this corpus block is damaged</p>
    <p> </p>
    <p><strong>Icon:</strong> <em>&lt;Sprite&gt;[]</em></p>
    <p>Array of sprites displayed in sequence among list of characters corpus blocks</p>
    <p><strong>myBuffs:</strong> <em>List&lt;</em><a href="#_BonusStats"><em>BonusStats</em></a><em>&gt;</em></p>
    <p>Bonuses applied to this characters corpus block; bonuses apply regardless of characters current corpus block, or if block is broken.</p>
    <p><strong>Traits:</strong> <em>&lt;</em><a href="#_TraitsList"><em>TraitsList</em></a><em>&gt;[]</em></p>
    <p>Array of physical traits applied to this character when this corpus is active.</p>
    <h1 id="statcard_dot">StatCard_DoT</h1>
    <p>A Damage-Over-Time effect applied to a character, can be applied from weapons, ammo, or explosions.</p>
    <p>Extends StatCard_Base</p>
    <p> </p>
    <p><strong>AttachPart:</strong> <em>&lt;</em><a href="#_ModelParts"><em>ModelParts</em></a><em>&gt;</em></p>
    <p>Where the DOT effect attaches itself to on a character</p>
    <p> </p>
    <p><strong>Buffs:</strong> <em>List&lt;Buffs_Manager.</em><a href="#_Buffs_Manager.BuffEffects"><em>BuffEffects</em></a><em>&gt;</em></p>
    <p>The type of buffs this DoT effect applies</p>
    <p> </p>
    <p><strong>Chance:</strong> <em>&lt;float&gt;</em></p>
    <p>The probability of a DoT effect applying</p>
    <p> </p>
    <p><strong>ConditionsToEnd:</strong> <em>&lt;DoT_Manager.</em><a href="#_DoT_Manager.ResolutionConditions"><em>ResolutionConditions</em></a><em>&gt;</em></p>
    <p>What it takes to end the suffering</p>
    <p> </p>
    <p><strong>ConditionsToReduce:</strong> <em>&lt;DoT_Manager.</em><a href="#_DoT_Manager.ResolutionConditions"><em>ResolutionConditions</em></a><em>&gt;</em></p>
    <p>What it takes to ease the suffering</p>
    <p> </p>
    <p><strong>ConstantEffect:</strong> <em>&lt;GameObject&gt;</em></p>
    <p>Passive effect applied to this character</p>
    <p> </p>
    <p><strong>DamageEffect:</strong> <em>&lt;GameObject&gt;</em></p>
    <p>Effect that activates when character is damaged</p>
    <p> </p>
    <p><strong>DamageFrameBuffer:</strong> <em>&lt;float&gt;</em></p>
    <p>Amount of frames meant to pass before damage can reapply</p>
    <p> </p>
    <p><strong>Effects:</strong> <em>&lt;DoT_Manager.</em><a href="#_DoT_Manager.Effects"><em>Effects</em></a><em>&gt;</em></p>
    <p>Status effects applied by this DoT effect</p>
    <p> </p>
    <p><strong>FlashColor:</strong> <em>&lt;Color&gt;</em></p>
    <p>Character flashes this color when damaged</p>
    <p><strong>Icon:</strong> <em>&lt;Image&gt;</em></p>
    <p> </p>
    <p><strong>TimeInFrames:</strong> <em>&lt;float&gt;</em></p>
    <p>Amount of time DoT effect lasts for by default</p>
    <p><strong>Type:</strong> <em>&lt;</em><a href="#_DamageType"><em>DamageType</em></a><em>&gt;</em></p>
    <p>Affects how targets will react to damage</p>
    <h1 id="statcard_execution">StatCard_Execution</h1>
    <p>An exeution that a character can perform on another character, typically on dizzied opponents.</p>
    <p>Extends StatCard_Base</p>
    <p><strong>Animations:</strong> <em>&lt;AnimationPair&gt;[]</em></p>
    <p>Array of animations for a lethal execution, elements chosen at random</p>
    <p> </p>
    <p><strong>Animations_NoKill:</strong> <em>&lt;AnimationPair&gt;[]</em></p>
    <p>Array of animations for a failed execution, elements chosen at random</p>
    <p> </p>
    <p><strong>myConditions:</strong> <em>List&lt;Execution_Manager.</em><a href="#_Execution_Manager.Conditions"><em>Conditions</em></a><em>&gt;</em></p>
    <p>Conditions that must be met to perform this execution</p>
    <p> </p>
    <p><strong>mySource:</strong> <em>List&lt;Execution_Manager.</em><a href="#_Execution_Manager.Source"><em>Source</em></a><em>&gt;</em></p>
    <p>The type of execution this is considered</p>
    <p> </p>
    <p><strong>Priority:</strong> <em>&lt;int&gt;</em></p>
    <p>Highest valid execution will be chosen from its source list</p>
    <p> </p>
    <p><strong>RequiredItem:</strong> <em>&lt;</em><a href="#_StatCard_Item"><em>StatCard_Item</em></a><em>&gt;</em></p>
    <p>The item that the character must have in person/inventory to perform this execution</p>
    <p> </p>
    <p><strong>ScaleDiffMinMax:</strong> <em>&lt;float&gt;[]</em></p>
    <p>Array of two floats specifying the min and max constraints for a characters <em>Scale</em> to perform this execution.</p>
    <p> </p>
    <p><strong>SelectColor:</strong> <em>&lt;Controller_Player.SelectionColors&gt;</em></p>
    <p>Character will be highlighted in this color to show that execution can be performed</p>
    <p> </p>
    <p><strong>Special:</strong> <em>List&lt;StatCard_Execution.</em><a href="#_SpecialRules"><em>SpecialRules</em></a><em>&gt;</em></p>
    <p>Additional conditions that must be met for this execution to be performed.</p>
    <h3 id="specialrules">SpecialRules</h3>
    <p><strong>NONE</strong>: No special rules applied</p>
    <p><strong>Bribe</strong>: Alternative execution, hold shift to use this execution. Makes the enemy join the executioners team</p>
    <p><strong>ImprovWeapon</strong>: Ignores Dizzy check, used for weapons that can be improvised.</p>
    <h1 id="statcard_explosion">StatCard_Explosion</h1>
    <p>A physical explosion that affects characters within its radius, does not affect source.</p>
    <p>Extends StatCard_Base</p>
    <p> </p>
    <p><strong>ArmorPiercing:</strong> <em>&lt;float&gt;</em></p>
    <p>Amount of armor piercing this explosion does</p>
    <p> </p>
    <p><strong>Damage:</strong> <em>&lt;float&gt;</em></p>
    <p>Amount of damage this explosion does, affected by <em>DropOff</em></p>
    <p> </p>
    <p><strong>DamageOverTimeEffect:</strong> <em>&lt;</em><a href="#_StatCard_DOT"><em>StatCard_DoT</em></a><em>&gt;</em></p>
    <p>The Damage Over Time effect to apply to all valid targets in its radius</p>
    <p> </p>
    <p><strong>Dropoff:</strong> <em>&lt;float&gt;</em></p>
    <p>Ratio at which damage begins to dropoff to 0; 0 = uniform dropoff, 1 = no dropoff</p>
    <p> </p>
    <p><strong>ExplosionEffect:</strong> <em>&lt;GameObject&gt;</em></p>
    <p>Particle effects for explosion</p>
    <p> </p>
    <p><strong>ExplosionSound:</strong> <em>&lt;string&gt;</em></p>
    <p>Path directory for explosion sound</p>
    <p> </p>
    <p><strong>FloorScar:</strong> <em>&lt;</em><a href="#_StatCard_Texture"><em>StatCard_Textures</em></a><em>&gt;</em></p>
    <p><em>Decal to leave at impact site of explosion</em></p>
    <p> </p>
    <p><strong>HitThroughWalls:</strong> <em>&lt;bool&gt;</em></p>
    <p>If enabled, explosion will ignore terrain</p>
    <p> </p>
    <p><strong>Ragdoll:</strong> <em>&lt;float&gt;</em></p>
    <p>Amount of time applied to ragdolling effect from this explosion</p>
    <p> </p>
    <p><strong>RagdollYMultiplier:</strong> <em>&lt;float&gt;</em></p>
    <p>Amount of lift ragdolled characters get from this explosion</p>
    <p> </p>
    <p><strong>Range:</strong> <em>&lt;float&gt;</em></p>
    <p>The radius of this explosion</p>
    <p> </p>
    <p><strong>Type:</strong> <em>&lt;</em><a href="#_DamageType"><em>DamageType</em></a><em>&gt;</em></p>
    <p>Affects how targets will react to damage</p>
    <p> </p>
    <p><strong>VictimImmuneFallDamage:</strong> <em>&lt;bool&gt;</em></p>
    <p>If enabled, ragdoll is immune to fall damage for the duration of their flight</p>
    <h1 id="statcard_item">StatCard_Item</h1>
    <p>A physical item that characters can equip; has properties for determining its size, weight, and how it can be purchased.</p>
    <p>Extends StatCard_Base</p>
    <p> </p>
    <p><strong>BreakDebris:</strong> <em>&lt;GameObject&gt;</em></p>
    <p>Particle effects for if the item breaks</p>
    <p> </p>
    <p><strong>DestroyedRef:</strong> <em>&lt;GameObject&gt;</em></p>
    <p>Reference to destroyed version of this model, used for guns with no ammo</p>
    <p> </p>
    <p><strong>ForSale:</strong> <em>&lt;StatCard_Item.</em><a href="#_Store"><em>Store</em></a><em>&gt;</em></p>
    <p>Which store this item is available for purchase in.</p>
    <p> </p>
    <p><strong>Genre:</strong> <em>&lt;ItemGenre&gt;</em></p>
    <p>The genre of this item; affects who can spawn with it in Arena.</p>
    <p> </p>
    <p><strong>MenuIcon:</strong> <em>&lt;Sprite&gt;</em></p>
    <p>The icon for this item in the store</p>
    <p> </p>
    <p><strong>MenuIconName:</strong> <em>&lt;string&gt;</em></p>
    <p>Name of this menu icon</p>
    <p> </p>
    <p><strong>myBuffs:</strong> <em>List&lt;</em><a href="#_BonusStats"><em>BonusStats</em></a><em>&gt;</em></p>
    <p>Bonuses applied to the character when this item is equipped</p>
    <p> </p>
    <p><strong>myRef:</strong> <em>&lt;GameObject&gt;</em></p>
    <p>Reference to this items model</p>
    <p> </p>
    <p><strong>Size:</strong> <em>&lt;float&gt;</em></p>
    <p>The size of this weapon; for StatCard_Weapon, this determines whether a character has sufficient strength to hold the item with one hand</p>
    <p> </p>
    <p><strong>Tier:</strong> <em>&lt;int&gt;</em></p>
    <p>Tier of this item, used for determining when it is available in the store based on Arena progression.</p>
    <p> </p>
    <p><strong>Weight:</strong> <em>&lt;float&gt;</em></p>
    <p>The weight of this item; determines how characters can throw the item, and how much its affected by gravity</p>
    <h3 id="store">Store</h3>
    <p><strong>NONE</strong>: Cannot be purchased</p>
    <p><strong>Quartermaster</strong></p>
    <p><strong>Blacmarket</strong></p>
    <h1 id="statcard_loadout">StatCard_Loadout</h1>
    <p>A stockpile of weapons that both players and AI can choose from.</p>
    <p>Extends StatCard_Base  </p>
    <p><strong>BorrowedLoadouts:</strong> <em>List&lt;</em><a href="#_StatCard_Loadout"><em>StatCard_Loadout</em></a><em>&gt;</em></p>
    <p>List of other loadouts to include in this loadout.</p>
    <p><strong>Warning: Stacks recursively, do not loop back to this loadout.</strong></p>
    <p> </p>
    <p><strong>LockedToCharacter:</strong> <em>&lt;</em><a href="#_StatCard_Character"><em>StatCard_Character</em></a><em>&gt;[]</em></p>
    <p>If loadout is selected in Story Mode, only the characters in this array can equip it.</p>
    <p> </p>
    <p><strong>Tier:</strong> <em>&lt;int&gt;</em></p>
    <p>Deprecated: Tier of this item would determine if enemy would spawn with it in old version of arena.</p>
    <p> </p>
    <p><strong>WeaponStockpile:</strong> <em>List&lt;</em><a href="#_StatCard_Weapon"><em>StatCard_Weapon</em></a><em>&gt;</em></p>
    <p>List of weapons that will be chosen at random when AI is assigned to a loadout in Story Mode.</p>
    <p>If used as a selectable story mode loadout, character will be equipped with first 5 weapons in array, the order is as follows:</p>
    <ol start="0" type="1">
    <li><p>Primary weapon, main hand</p></li>
    <li><p>1: Primary weapon, off hand</p></li>
    <li><p>Secondary weapon: main hand</p></li>
    <li><p>Secondary weapon: off hand</p></li>
    <li><p>Throwable weapon</p></li>
    </ol>
    <p> </p>
    <h1 id="statcard_loadout_wardrobe">StatCard_Loadout_Wardrobe</h1>
    <p>A set of armor that can equipped to a player character in the stage selection screen of story mode, also comes with bonuses.</p>
    <p>Extends StatCard_Base</p>
    <p> </p>
    <p><strong>AllowedUsers:</strong> <em>List&lt;</em><a href="#_StatCard_Character"><em>StatCard_Character</em></a><em>&gt;</em></p>
    <p>If loadout is selected in Story Mode, only the characters in this list can equip it.</p>
    <p> </p>
    <p><strong>AlternateParts:</strong> <em>&lt;</em><a href="#_Part_BodyPart"><em>Part_BodyPart</em></a><em>&gt;[]</em></p>
    <p>Array of alternate parts swapped out with the characters model (<strong>must be compatible with model itself</strong>).</p>
    <p> </p>
    <p><strong>ArmorHead:</strong> <em>&lt;Vector2&gt;</em></p>
    <p>The natural armor value to this characters head; x value of Vector determines armor value (<strong>Ignored if CountWornArmor is true</strong>).</p>
    <p> </p>
    <p><strong>ArmorBody:</strong> <em>&lt;Vector2&gt;</em></p>
    <p>The natural armor value to this characters torso; x value of Vector determines armor value (<strong>Ignored if CountWornArmor is true</strong>).</p>
    <p> </p>
    <p><strong>BonusCorpus:</strong> <em>&lt;</em><a href="#_StatCard_Corpus"><em>StatCard_Corpus</em></a><em>&gt;[]</em></p>
    <p>Appends the array of corpus blocks onto the assigned character.</p>
    <p> </p>
    <p><strong>EmptySlots:</strong> <em>&lt;Catalog_Armor.</em><a href="#_Catalog_Armor.ArmorSlots"><em>ArmorSlots</em></a><em>&gt;[]</em></p>
    <p>Array of slots that will be cleared out of the characters default items (items automatically replaced by <em>OutfitPieces</em> and <em>UniformPieces</em>)</p>
    <p> </p>
    <p><strong>EncumbranceSpeedPenalty:</strong> <em>&lt;float&gt;</em></p>
    <p>Multiplier for speed penalty.</p>
    <p> </p>
    <p><strong>OutfitPieces:</strong> <em>&lt;</em><a href="#_StatCard_Armor"><em>StatCard_Armor</em></a><em>&gt;[]</em></p>
    <p>armor applied to this character.</p>
    <p><em>If any armor pieces support colorization, all colors are randomly selected. See Uniform for customizable version.</em></p>
    <p><em>If an element is undefined, armor will not be applied.</em></p>
    <p> </p>
    <p><strong>SwapMaterials:</strong> <em>&lt;StatCard_Character.</em><a href="#_MaterialSwaps"><em>MaterialSwap</em></a><em>&gt;[]</em></p>
    <p>Array of materials to be swapped on this character.</p>
    <p> </p>
    <p><strong>UniformPieces:</strong> <em>&lt;</em><a href="#_UniformWearable"><em>UniformWearable</em></a><em>&gt;[]</em></p>
    <p>Armor applied to this character, can be colorized and altered with different styles.</p>
    <p>Unlike OutfitPieces, valid armor pieces must be selected.</p>
    <h1 id="statcard_mission">StatCard_Mission</h1>
    <p>An objective attached to a stage to be completed; displays in the bottom left corner when assigned and completed.</p>
    <p>Extends StatCard_Base</p>
    <p> </p>
    <p><strong>Mission:</strong> <em>&lt;</em><a href="#_Mission_Instance"><em>Mission_Instance</em></a><em>&gt;</em></p>
    <p>The mission to perform in the attached stage</p>
    <p> </p>
    <h1 id="statcard_origin">StatCard_Origin</h1>
    <p>A starting origin for an arena player character; can provide starting bonuses such as gear, attribute adjustments, and skills</p>
    <p>Extends StatCard_Base</p>
    <p> </p>
    <p><strong>AmEnabled:</strong> <em>&lt;bool&gt;</em></p>
    <p>If enabled, choice of origin will be visible (not affected by imprint system).</p>
    <p> </p>
    <p><strong>AttributeBonusess:</strong> <em>&lt;int&gt;[]</em></p>
    <p>A 4-element array modifying the characters attributes in the following order: Strength, Endurance, Dexterity, Tactics</p>
    <p><span style="font-family:Wingdings;mso-fareast-font-family:Wingdings;mso-bidi-font-family: Wingdings"><span style="mso-list:Ignore">v<span style="font:7.0pt &quot;Times New Roman&quot;"> </span></span></span>Values are added/subtracted from <em>CharacterType</em>s attributes</p>
    <p><span style="font-family:Wingdings;mso-fareast-font-family:Wingdings;mso-bidi-font-family: Wingdings"><span style="mso-list:Ignore">v<span style="font:7.0pt &quot;Times New Roman&quot;"> </span></span></span>After origin is unlocked; successive imprints will increment values by 1 with each imprint.</p>
    <p> </p>
    <p><strong>CharacterType:</strong> <em>&lt;</em><a href="#_StatCard_Character"><em>StatCard_Character</em></a><em>&gt;</em></p>
    <p>The character that the player will control when playing as this origin</p>
    <p><span style="font-family:Wingdings;mso-fareast-font-family:Wingdings;mso-bidi-font-family: Wingdings"><span style="mso-list:Ignore">v<span style="font:7.0pt &quot;Times New Roman&quot;"> </span></span></span>If character has armor equipped, will be replaced by <em>DefaultArmor</em> and <em>DefaultGear</em></p>
    <p> </p>
    <p><strong>DefaultArmor:</strong> <em>&lt;</em><a href="#_StatCard_Armor"><em>StatCard_Armor</em></a><em>&gt;[]</em></p>
    <p>armor applied to this character.</p>
    <p><span style="font-family:Wingdings;mso-fareast-font-family:Wingdings;mso-bidi-font-family: Wingdings"><span style="mso-list:Ignore">v<span style="font:7.0pt &quot;Times New Roman&quot;"> </span></span></span><em>If any armor pieces support colorization, all colors are randomly selected. See Uniform for customizable version.</em></p>
    <p><span style="font-family:Wingdings;mso-fareast-font-family:Wingdings;mso-bidi-font-family: Wingdings"><span style="mso-list:Ignore">v<span style="font:7.0pt &quot;Times New Roman&quot;"> </span></span></span><em>If an element is undefined, armor will not be applied.</em></p>
    <p> </p>
    <p><strong>DefaultGear:</strong> <em>&lt;</em><a href="#_UniformWearable"><em>UniformWearable</em></a><em>&gt;[]</em></p>
    <p>Armor applied to this character, can be colorized and altered with different styles.</p>
    <p>Unlike OutfitPieces, valid armor pieces must be selected.</p>
    <p><br />
    <strong>Icon:</strong> <em>&lt;Sprite&gt;</em></p>
    <p>The icon that represents this origin in the imprint selection screen</p>
    <p> </p>
    <p><strong>ImprintsTilUnlock:</strong> <em>&lt;int&gt;</em></p>
    <p>The amount of imprints needed to unlock this origin</p>
    <p> </p>
    <p><strong>myBuffs:</strong> <em>List&lt;</em><a href="#_BonusStats"><em>BonusStats</em></a><em>&gt;</em></p>
    <p>Passive bonuses applied to the <em>CharacterType</em></p>
    <p> </p>
    <p><strong>SkillFocus:</strong> <em>&lt;Catalog_Skills.</em><a href="#_Catalog_Skills.SkillGroups"><em>SkillGroups</em></a><em>&gt;</em></p>
    <p>Category of skills that this character is focused in; allows player to purchase focus skills.</p>
    <p> </p>
    <p><strong>SkillWeakness:</strong> <em>&lt;Catalog_Skills.</em><a href="#_Catalog_Skills.SkillGroups"><em>SkillGroups</em></a><em>&gt;</em></p>
    <p>Category of skills that this character is struggling in; prevents player from unlocking Core 3 skills.</p>
    <p> </p>
    <p><strong>SpecialSkills:</strong> <em>&lt;</em><a href="#_StatCard_Skill"><em>StatCard_Skill</em></a><em>&gt;</em></p>
    <p>Array of skills that automatically come equipped with this origin.</p>
    <p> </p>
    <p><strong>Swatch_Pairs:</strong> <em>List&lt;</em><a href="#_ColorPair"><em>ColorPair</em></a><em>&gt;</em></p>
    <p>Available swatches to this armor, affects primary and secondary colors</p>
    <p> </p>
    <p><strong>Swatch_Solos:</strong> <em>List&lt;</em><a href="#_ColorSolo"><em>ColorSolo</em></a><em>&gt;</em></p>
    <p>Available swatches to this armor, affects glass colors</p>
    <p> </p>
    <h1 id="statcard_ranged">StatCard_Ranged</h1>
    <p>A ranged weapon that is the base for all guns. Ranged weapons have full addon control, and all attachments add their properties to this weapon.</p>
    <p>Extends StatCard_WeaponStats_Additional</p>
    <p> </p>
    <p><strong>AllowedAddons:</strong> <em>List&lt;</em><a href="#_StatCard_WeaponAddon"><em>StatCard_WeaponAddon</em></a><em>&gt;</em></p>
    <p>List of atachments allowed to be put on this gun</p>
    <p> </p>
    <p><strong>AllowedGroups:</strong> <em>List&lt;</em><a href="#_StatCard_WeaponAddonGroup"><em>StatCard_WeaponAddonGroup</em></a><em>&gt;</em></p>
    <p>List of attachment groups supported by this gun</p>
    <p> </p>
    <p><strong>Automatic:</strong> <em>&lt;bool&gt;</em></p>
    <p>If enabled, weapon will fire as long as trigger is held down and ammo remains</p>
    <p> </p>
    <p><strong>Breech:</strong> <em>&lt;bool&gt;</em></p>
    <p>If enabled, weapon is considered breech-loaded, stock will fold open while reloading</p>
    <p> </p>
    <p><strong>CoreAddons:</strong> <em>List&lt;</em><a href="#_StatCard_WeaponAddon"><em>StatCard_WeaponAddon</em></a><em>&gt;</em></p>
    <p>Default attachments that can only be replaced instead of removed</p>
    <p> </p>
    <p><strong>CoreGroups:</strong> <em>List&lt;</em><a href="#_StatCard_WeaponAddonGroup"><em>StatCard_WeaponAddonGroup</em></a><em>&gt;</em></p>
    <p>Default groups that CoreAddons can swap with</p>
    <p> </p>
    <p><strong>DefaultAddons:</strong> <em>List&lt;</em><a href="#_StatCard_WeaponAddon"><em>StatCard_WeaponAddon</em></a><em>&gt;</em></p>
    <p>List of atachments already attached to this gun</p>
    <p> </p>
    <p><strong>DefaultGroups:</strong> <em>List&lt;</em><a href="#_StatCard_WeaponAddonGroup"><em>StatCard_WeaponAddonGroup</em></a><em>&gt;</em></p>
    <p>List of attachment variants that this weapon will draw from when randomly generated</p>
    <p> </p>
    <p><strong>Pump:</strong> <em>&lt;bool&gt;</em></p>
    <p>If enabled, rounds are loaded one-at-a-time when reloading</p>
    <h1 id="statcard_skill">StatCard_Skill</h1>
    <p>A skill card that arena characters can choose to unlock more skills</p>
    <p>Note: This is not the same as the actual skills themselves, this is just what enables players to unlock them in addition to increasing their attributes</p>
    <p>Extends StatCard_Base</p>
    <p> </p>
    <p><strong>Category:</strong> <em>&lt;int&gt;</em></p>
    <p>Index for the Categories property from the SkillTree that this skill belongs to</p>
    <p> </p>
    <p><strong>CoreRank:</strong> <em>&lt;int&gt;</em></p>
    <p>If this is a core skill, this is the level that it reaches.</p>
    <p> </p>
    <p><strong>PreReqSkills:</strong> <em>&lt;</em><a href="#_StatCard_Skill"><em>StatCard_Skill</em></a><em>&gt;[]</em></p>
    <p>Array of prerequisite skills needed before this one becomes unlockable</p>
    <p> </p>
    <p><strong>PrioritySkill:</strong> <em>&lt;bool&gt;</em></p>
    <p>If enabled, will be listed as an important skill; hirelings will also aim to acquire these skills first</p>
    <p> </p>
    <p><strong>ProficientSkill:</strong> <em>&lt;bool&gt;</em></p>
    <p>If enabled, skill can only be acquired by those focused in this <em>SkillTree</em></p>
    <p> </p>
    <p><strong>Skill:</strong> <em>&lt;SkillsList&gt;</em></p>
    <p>The skill that this card enables</p>
    <p> </p>
    <p><strong>SkillTree:</strong> <em>&lt;</em><a href="#_StatCard_SkillTree"><em>StatCard_SkillTree</em></a><em>&gt;</em></p>
    <p>The skill that this card enables</p>
    <p> </p>
    <p><strong>Tier:</strong> <em>&lt;int&gt;</em></p>
    <p>The level of skill; is 0 based (0 = 1)</p>
    <p><span style="font-family:Wingdings;mso-fareast-font-family:Wingdings;mso-bidi-font-family: Wingdings"><span style="mso-list:Ignore">v<span style="font:7.0pt &quot;Times New Roman&quot;"> </span></span></span>Character must have a skill of equal CoreRank to unlock skills of equal Tier</p>
    <p> </p>
    <p><strong>XP_Cost:</strong> <em>&lt;int&gt;</em></p>
    <p>The amount of XP in this <em>SkillTree</em> that this card costs to unlock</p>
    <p> </p>
    <h1 id="statcard_skillgroup">StatCard_SkillGroup</h1>
    <p>A collection of skills that can be applied to characters, individual skills can be removed from these groups using the characters <em>RemoveSkill</em> property</p>
    <p>Extends StatCard_Base</p>
    <p> </p>
    <p><strong>BorrowedGroups:</strong> <em>&lt;</em><a href="#_StatCard_SkillGroup"><em>StatCard_SkillGroup</em></a><em>&gt;[]</em></p>
    <p>List of other skillgroups to include in this skillgroup.</p>
    <p><strong>Warning: Stacks recursively, do not loop back to this skillgroup.</strong></p>
    <p> </p>
    <p><strong>Skills:</strong> <em>&lt;</em><a href="#_SkillsList"><em>SkillsList</em></a><em>&gt;[]</em></p>
    <p>Array of skills applied to this skillgroup.</p>
    <p> </p>
    <h1 id="statcard_skilltree">StatCard_SkillTree</h1>
    <p>A representation of a skill tree; also affects hirelings disposed to this skill tree.</p>
    <p>Extends StatCard_Base</p>
    <p><strong>Attributes:</strong> <em>&lt;</em><a href="#_AttributeList"><em>AttributeList</em></a><em>&gt;[]</em></p>
    <p>Array of attributes that character is allowed to rank up when purchasing skills from this skill tree</p>
    <p>Attributes are incremented with the formula of (1 + CoreRank), multiplied by 2 if this is a focus tree</p>
    <p> </p>
    <p><strong>Categories:</strong> <em>&lt;string&gt;[]</em></p>
    <p>Array of categories that skills can be categorized under, cosmetic purpose only</p>
    <p> </p>
    <p><strong>CoreSkills:</strong> <em>List&lt;</em><a href="#_StatCard_Skill"><em>StatCard_Skill</em></a><em>&gt;</em></p>
    <p>Core skills found in this Skill Tree</p>
    <p> </p>
    <p><strong>Group:</strong> <em>&lt;Catalog_Skills.</em><a href="#_Catalog_Skills.SkillGroups"><em>SkillGroup</em></a><em>&gt;</em></p>
    <p>The branch of skills that this SkillTree represents</p>
    <p> </p>
    <p><strong>GroupColor:</strong> <em>&lt;Color&gt;</em></p>
    <p>All skill cards and text relating to this skill tree will be this color</p>
    <p> </p>
    <p><strong>HirelingsSay_Bye:</strong> <em>&lt;string&gt;[]</em></p>
    <p>Array of chatter quotes that Hirelings focused in this SKillTree will say when dismissed from player squad</p>
    <p> </p>
    <p><strong>HirelingsSay_Hello:</strong> <em>&lt;string&gt;[]</em></p>
    <p>Array of chatter quotes that Hirelings focused in this SKillTree will say when added to player squad</p>
    <p> </p>
    <p><strong>HirelingTitles:</strong> <em>&lt;string&gt;[]</em></p>
    <p>Array of titles that hirelings focused in this SkillTree can have</p>
    <p> </p>
    <p><strong>Icon:</strong> <em>&lt;Sprite&gt;</em></p>
    <p>The icon that represents this SkillTree</p>
    <p> </p>
    <p><strong>IconPlain:</strong> <em>&lt;Sprite&gt;</em></p>
    <p> </p>
    <p><strong>IconSimple:</strong> <em>&lt;Sprite&gt;</em></p>
    <p> </p>
    <h1 id="statcard_skin">StatCard_Skin</h1>
    <p>A set of alternate parts and material swaps that can be purchased to apply to an arena character; can only be purchased with boon tokens.</p>
    <p>Extends StatCard_Base</p>
    <p> </p>
    <p><strong>AltMaterials:</strong> <em>&lt;StatCard_Character.</em><a href="#_MaterialSwaps"><em>MaterialSwaps</em></a><em>&gt;[]</em></p>
    <p>Array of materials to be swapped on this character.</p>
    <p> </p>
    <p><strong>AltModels:</strong> <em>&lt;</em><a href="#_Part_BodyPart"><em>Part_BodyPart</em></a><em>&gt;[]</em></p>
    <p>Array of alternate parts swapped out with the characters model (<strong>must be compatible with model itself</strong>).</p>
    <p> </p>
    <p><strong>AmDefault:</strong> <em>&lt;bool&gt;</em></p>
    <p>If enabled, this item will be free when purchased</p>
    <p> </p>
    <p><strong>Cost:</strong> <em>&lt;int&gt;</em></p>
    <p>Amount of boon tokens to purchase</p>
    <p> </p>
    <p><strong>MenuColor:</strong> <em>&lt;Color&gt;</em></p>
    <p>The color of this item in the selection menu</p>
    <p> </p>
    <p><strong>MenuIcon:</strong> <em>&lt;Sprite&gt;</em></p>
    <p>The icon that represents the category for this skin</p>
    <h1 id="statcard_soundpack">StatCard_SoundPack</h1>
    <p>A directory of sound effects attached to weapons</p>
    <p>Extends StatCard_Base</p>
    <p> </p>
    <p><strong>Block:</strong> <em>&lt;string&gt;</em></p>
    <p>Sound directory for when weapon successfully blocks an attack</p>
    <p> </p>
    <p><strong>Drop:</strong> <em>&lt;string&gt;</em></p>
    <p>Sound directory for when weapon is dropped</p>
    <p> </p>
    <p><strong>Equip:</strong> <em>&lt;string&gt;</em></p>
    <p>Sound directory for when weapon is picked up or unholstered</p>
    <p> </p>
    <p><strong>Hit:</strong> <em>&lt;string&gt;</em></p>
    <p>Sound directory for when weapon hits a valid target with a heavy attack</p>
    <p> </p>
    <p><strong>HitLight:</strong> <em>&lt;string&gt;</em></p>
    <p>Sound directory for when weapon hits a valid target with a light attack</p>
    <p> </p>
    <p><strong>Stow:</strong> <em>&lt;string&gt;</em></p>
    <p>Sound directory for when weapon is stowed on a characters back</p>
    <p> </p>
    <p><strong>Swing:</strong> <em>&lt;string&gt;</em></p>
    <p>Sound directory for the weapons heavy swing</p>
    <p> </p>
    <p><strong>SwingLight:</strong> <em>&lt;string&gt;</em></p>
    <p>Sound directory for the weapons light swing</p>
    <h1 id="statcard_stage">StatCard_Stage</h1>
    <p>A set of global parameters for a stage</p>
    <p>Extends StatCard_Base</p>
    <p> </p>
    <p><strong>AdditionalObjectives:</strong> <em>List&lt;string&gt;</em></p>
    <p>Deprecated? Written objectives.</p>
    <p> </p>
    <p><strong>AmHub:</strong> <em>&lt;bool&gt;</em></p>
    <p>If enabled, this stage is treated as a hub with no objectives or win conditions.</p>
    <p> </p>
    <p><strong>CurrentTrack:</strong> <em>&lt;int&gt;</em></p>
    <p>Index for the current track list in MusicDefault</p>
    <p> </p>
    <p><strong>LoadScreenTips:</strong> <em>&lt;string&gt;[]</em></p>
    <p>Additional loading screen tips specifically for this stage (Deprecated?)</p>
    <p> </p>
    <p><strong>Missions:</strong> <em>List&lt;</em><a href="#_StatCard_Mission"><em>StatCard_Mission</em></a><em>&gt;</em></p>
    <p>List of missions to perform in sequence for this stage.</p>
    <p> </p>
    <p><strong>MusicDefault:</strong> <em>&lt;string&gt;[]</em></p>
    <p>Array of directories for music to play when this stage is loaded</p>
    <p>Playlist increments to next track when stage is loaded after entering a new stage.</p>
    <p> </p>
    <p><strong>SceneName:</strong> <em>&lt;string&gt;</em></p>
    <p>Unity path for the scene to load into for this stage.</p>
    <p> </p>
    <p><strong>Snapshot:</strong> <em>&lt;Texture2D&gt;</em></p>
    <p>A screenshot overlay behind the mission box.</p>
    <p> </p>
    <p><strong>StageEnabled:</strong> <em>&lt;bool&gt;</em></p>
    <p>If enabled, stage marker will be visible (Deprecated?)</p>
    <p> </p>
    <p><strong>Tier:</strong> <em>&lt;int&gt;</em></p>
    <p>The natural difficulty level of this stage between 0 10, affects enemy aggression and arena stage unit cap.</p>
    <h1 id="statcard_stage_arena">StatCard_Stage_Arena</h1>
    <p>Additional global parameters for arena stages; comes with its own unit generator and cash/XP modifiers</p>
    <p>Extends StatCard_Stage</p>
    <p> </p>
    <p><strong>ArenaMode:</strong> <em>&lt;Arena_Manager.</em><a href="#_Arena_Magnager.ArenaMode"><em>ArenaMode</em></a><em>&gt;</em></p>
    <p>The type of gamemode this arena stage is</p>
    <p> </p>
    <p><strong>DeathIsFake:</strong> <em>&lt;bool&gt;</em></p>
    <p>If enabled,stage is not considered failiure on death.</p>
    <p> </p>
    <p><strong>Enemies_MaxUnitsMult:</strong> <em>&lt;float&gt;</em></p>
    <p>Multiplier formaximum amount of units allowed in stage.</p>
    <p> </p>
    <p><strong>Enemies_SquadSizeMult:</strong> <em>&lt;float&gt;</em></p>
    <p>Multiplier formaximum size of squads that enter arena.</p>
    <p> </p>
    <p><strong>FinalInfiniteSequence:</strong> <em>&lt;</em><a href="#_Arena_Wave_Sequence"><em>Arena_Wave_Sequence</em></a><em>&gt;</em></p>
    <p>Multiplier formaximum amount of units allowed in stage.</p>
    <p> </p>
    <p><strong>StageEnd_Die:</strong> <em>&lt;Headquarters_Manager.</em><a href="#_HeadQuarters_Manager.StartLocation"><em>StartLocation</em></a><em>&gt;</em></p>
    <p>Where the player ends up in HQ upon death.</p>
    <p> </p>
    <p><strong>StageEnd_Quit:</strong> <em>&lt; Headquarters_Manager.</em><a href="#_HeadQuarters_Manager.StartLocation"><em>StartLocation</em></a><em>&gt;</em></p>
    <p>Where the player ends up in HQ if they leave or abort.</p>
    <p> </p>
    <p><strong>StageEnd_Win:</strong> <em>&lt; Headquarters_Manager.</em><a href="#_HeadQuarters_Manager.StartLocation"><em>StartLocation</em></a><em>&gt;</em></p>
    <p>Where the player ends up in HQ after completion.</p>
    <p> </p>
    <p><strong>WaveSequences:</strong> <em>List&lt;</em><a href="#_Arena_Wave_Sequence"><em>Arena_Wave_Sequence</em></a><em>&gt;</em></p>
    <p>List of checkpoints for arena stage.</p>
    <p> </p>
    <p><strong>WorldChangeOnVictory:</strong> <em>&lt;string&gt;</em></p>
    <p>HQ enables scene changes tied to this flag.</p>
    <p> </p>
    <h1 id="statcard_stage_story">StatCard_Stage_Story</h1>
    <p>Additional global parameters for story stages; comes with scene transitions and awarding loadouts</p>
    <p>Extends StatCard_Stage</p>
    <p><strong>BattleRoomComplete:</strong> <em>List&lt;string&gt;</em></p>
    <p>Sequence of tag lines for battle room victories</p>
    <p> </p>
    <p><strong>BattleRoomWarnings:</strong> <em>List&lt;string&gt;</em></p>
    <p>Sequence of tag lines for battle room initializations</p>
    <p> </p>
    <p><strong>BonusPlayerCharacters:</strong> <em>List&lt;</em> <em>StatCard_Stage_Story.</em><a href="#_StageCharacterSet"><em>StageCharacterSet</em></a><em>&gt;</em></p>
    <p>If additional controllers are plugged in, players will play as these characters.</p>
    <p> </p>
    <p><strong>EndStageScene:</strong> <em>&lt;string&gt;</em></p>
    <p>The default scene the player squad loads into after this stage.</p>
    <p> </p>
    <p><strong>EndStageScene_Entry:</strong> <em>&lt;string&gt;</em></p>
    <p>The default entrance the player squad enters from in a scene after this stage.</p>
    <p> </p>
    <p><strong>ForbidScene:</strong> <em>&lt;string&gt;</em></p>
    <p>The scene the player squad loads into after completing a stage, but the world does not have the record specified by ForbidWorldChange.</p>
    <p> </p>
    <p><strong>ForbidScene_Entry:</strong> <em>&lt;string&gt;</em></p>
    <p>The entrance the player squad enters from in a scene after completing a stage, but the world does not have the record specified by ForbidWorldChange.</p>
    <p> </p>
    <p><strong>ForbidWorldChange:</strong> <em>&lt;string&gt;</em></p>
    <p>This record will become true after completing the stage</p>
    <p> </p>
    <p><strong>LinkedOverworld:</strong> <em>&lt;</em><a href="#_StatCard_Stage"><em>StatCard_Stage</em></a><em>&gt;</em></p>
    <p>The hub scene that this stage is linked to; used for display on the stage selection panel.</p>
    <p> </p>
    <p><strong>NeverWonScene:</strong> <em>&lt;string&gt;</em></p>
    <p>The scene the player squad loads into after quitting or failing a stage that hasnt been completed.</p>
    <p> </p>
    <p><strong>NeverWonScene_Entry:</strong> <em>&lt;string&gt;</em></p>
    <p>The entrance the player squad enters from in a scene after quitting or failing a stage that hasnt been completed.</p>
    <p> </p>
    <p><strong>PreReqScene:</strong> <em>&lt;string&gt;</em></p>
    <p>The scene the player squad loads into after completing a stage, and has beaten the PreReqStage.</p>
    <p> </p>
    <p><strong>PreReqScene_Entry:</strong> <em>&lt;string&gt;</em></p>
    <p>The entrance the player squad enters from in a scene after completing a stage, and has beaten the PreReqStage.</p>
    <p> </p>
    <p><strong>PreReqStage:</strong> <em>&lt;</em><a href="#_StatCard_Stage_Story"><em>StatCard_Stage_Story</em></a><em>&gt;</em></p>
    <p>The stage to be completed before being allowed to complete this one</p>
    <p> </p>
    <p><strong>Prize_Loadout:</strong> <em>List&lt;</em><a href="#_StatCard_Loadout"><em>StatCard_Loadout</em></a><em>&gt;</em></p>
    <p>Players win these loadouts for use in completed stages after completing this one.</p>
    <p> </p>
    <p><strong>Prize_Wardrobe:</strong> <em>List&lt;</em><a href="#_StatCard_Loadout_Wardrobe"><em>StatCard_Loadout_Wardrobe</em></a><em>&gt;</em></p>
    <p>Players win these wardrobes for use in completed stages after completing this one.</p>
    <p> </p>
    <p><strong>RequiredCharacters:</strong> <em>List&lt;</em> <em>StatCard_Stage_Story.</em><a href="#_StageCharacterSet"><em>StageCharacterSet</em></a><em>&gt;</em></p>
    <p>The characters to play as during this stage.</p>
    <p> </p>
    <p><strong>VictoryScene:</strong> <em>&lt;string&gt;</em></p>
    <p>The scene the player squad loads into after completing a stage.</p>
    <p> </p>
    <p><strong>VictoryScene_Entry:</strong> <em>&lt;string&gt;</em></p>
    <p>The entrance the player squad enters from in a scene after completing a stage.</p>
    <h1 id="stagecharacterset">StageCharacterSet</h1>
    <p> </p>
    <p><strong>DefaultLoadout:</strong> <em>&lt;</em><a href="#_StatCard_Loadout"><em>StatCard_Loadout</em></a><em>&gt;</em></p>
    <p>The default loadout of this playable character when loaded into a story mission.</p>
    <p>Loadout is locked to default for the first playthough.</p>
    <p> </p>
    <p><strong>DefaultWardrobe:</strong> <em>&lt;</em><a href="#_StatCard_Loadout_Wardrobe"><em>StatCard_Loadout_Wardrobe</em></a><em>&gt;</em></p>
    <p>The default wardrobe of this playable character when loaded into a story mission.</p>
    <p> </p>
    <p><strong>MyCharacter:</strong> <em>&lt;</em><a href="#_StatCard_Character"><em>StatCard_Character</em></a><em>&gt;</em></p>
    <p>The character to play as.</p>
    <h1 id="statcard_swatch">StatCard_Swatch</h1>
    <p>A collection of colors that can be applied to purchased armor items in Arena Mode; can only be purchasaed with boon tokens, but are permanently available on purchase</p>
    <p>Extends StatCard_Base</p>
    <p> </p>
    <p><strong>CanBuy:</strong> <em>&lt;bool&gt;</em></p>
    <p>If enabled, this swatch can be purchased from The Fence.</p>
    <p> </p>
    <p><strong>ColorPairs:</strong> <em>&lt;</em><a href="#_ColorPair"><em>ColorPair</em></a><em>&gt;[]</em></p>
    <p>Array of available armor colors from this swatch, affects primary and secondary colors</p>
    <p> </p>
    <p><strong>ColorSolos:</strong> <em>&lt;</em><a href="#_ColorSolo"><em>ColorSolo</em></a><em>&gt;[]</em></p>
    <p>Array of available glow colors from this swatch, affects primary and secondary colors</p>
    <p> </p>
    <p><strong>MenuColor:</strong> <em>&lt;Color&gt;</em></p>
    <p>The color of this item in the selection menu</p>
    <p> </p>
    <p><strong>MenuIcon:</strong> <em>&lt;Sprite&gt;</em></p>
    <p>The icon that represents the category for this skin</p>
    <p> </p>
    <p><strong>TokenCost:</strong> <em>&lt;int&gt;</em></p>
    <p>Amount of boon tokens to purchase</p>
    <h1 id="statcard_textures">StatCard_Textures</h1>
    <p>A decal thats applied to a surface, typically from impacts and explosions.</p>
    <p>ExtendsStatCard_Base</p>
    <h1 id="statcard_thrown"> StatCard_Thrown</h1>
    <p>A tertiary weapon that is thrown, typically from the grenade slot.</p>
    <p>Extends StatCard_WeaponStats_Additional</p>
    <p> </p>
    <p><strong>ForceGrenadeSlot:</strong> <em>&lt;bool&gt;</em></p>
    <p>If enabled, will always be equipped in grenade slot</p>
    <p> </p>
    <h1 id="statcard_voiceset">StatCard_VoiceSet</h1>
    <p>A voiceset attached to the character, often overlaps with chatter, but acts independently.</p>
    <p>Extends StatCard_Base</p>
    <p> </p>
    <p><strong>Affirmative:</strong> <em>&lt;string&gt;</em></p>
    <p>Sound directory for when character has been given an order by squad leader.</p>
    <p> </p>
    <p><strong>Angry:</strong> <em>&lt;string&gt;</em></p>
    <p>Sound directory for when character has spotted a target</p>
    <p> </p>
    <p><strong>Attack:</strong> <em>&lt;string&gt;</em></p>
    <p>Sound directory for when character performs a melee attack</p>
    <p> </p>
    <p><strong>BigAttack:</strong> <em>&lt;string&gt;</em></p>
    <p>Sound directory for when character performs a finisher attack</p>
    <p>Also used to announce siege infiltrators</p>
    <p> </p>
    <p><strong>Cheer:</strong> <em>&lt;string&gt;</em></p>
    <p>Sound directory for when character has killed or incapacitated a target</p>
    <p> </p>
    <p><strong>Death:</strong> <em>&lt;string&gt;</em></p>
    <p>Sound directory for when character dies</p>
    <p> </p>
    <p><strong>Dialogue:</strong> <em>&lt;string&gt;</em></p>
    <p>Sound directory for default character narration</p>
    <p> </p>
    <p><strong>Grunt:</strong> <em>&lt;string&gt;</em></p>
    <p>Sound directory for when character dodges</p>
    <p> </p>
    <p><strong>Laugh:</strong> <em>&lt;string&gt;</em></p>
    <p>Sound directory for when character has landed a hit on its target</p>
    <p> </p>
    <p><strong>Pain:</strong> <em>&lt;string&gt;</em></p>
    <p>Sound directory for when target has landed a hit on this character</p>
    <h1 id="statcard_weapon">StatCard_Weapon</h1>
    <p>A weapon that can be picked up and operated by characters; will disappear if it has either been broken or has run out of ammo</p>
    <p>Extends StatCard_Item</p>
    <p><strong>BrokenExplosion:</strong> <em>&lt;</em><a href="#_StatCard_Explosion"><em>StatCard_Explosion</em></a><em>&gt;</em></p>
    <p>If this item is broken, it will explode like this</p>
    <p> </p>
    <p><strong>BrokenReplacement:</strong> <em>&lt;</em><a href="#_StatCard_Weapon"><em>StatCard_Weapon</em></a><em>&gt;</em></p>
    <p>If this item is broken, this will be what it breaks into</p>
    <p> </p>
    <p><strong>Category:</strong> &lt;<a href="#_WeaponCategories"><em>WeaponCategories</em></a><em>&gt;</em></p>
    <p>The category of this weapon</p>
    <p> </p>
    <p><strong>Executions_MainHand:</strong> <em>&lt;</em><a href="#_StatCard_Execution"><em>StatCard_Execution</em></a><em>&gt;[]</em></p>
    <p>Array of executions performed if this weapon is in the main hand</p>
    <p> </p>
    <p><strong>Executions_OffHand:</strong> <em>&lt;</em><a href="#_StatCard_Execution"><em>StatCard_Execution</em></a><em>&gt;[]</em></p>
    <p>Array of executions performed if this weapon is in the off-hand</p>
    <p> </p>
    <p><strong>MeleeAmmo:</strong> <em>&lt;int&gt;</em></p>
    <p>The amount of hits this item can make before it breaks; heavy hits consume more ammo</p>
    <p> </p>
    <p><strong>MeleeArmorPiercing:</strong> <em>&lt;float&gt;</em></p>
    <p>Amount of armor piercing this weapon does when swung</p>
    <p> </p>
    <p><strong>MeleeDamage:</strong> <em>&lt;float&gt;</em></p>
    <p>Amount of damage this weapon does when swung</p>
    <p> </p>
    <p><strong>MeleeDamageType:</strong> <em>&lt;</em><a href="#_DamageType"><em>DamageType</em></a><em>&gt;</em></p>
    <p>Affects how targets will react to damage</p>
    <p> </p>
    <p><strong>MeleeDefense:</strong> <em>&lt;float&gt;</em></p>
    <p>Amount of damage mitigated to this weapon when blocking</p>
    <p> </p>
    <p><strong>MeleeDoT:</strong> <em>&lt;</em><a href="#_StatCard_DOT"><em>StatCard_DoT</em></a><em>&gt;</em></p>
    <p>The Damage Over Time effect to apply on impact with a valid target</p>
    <p> </p>
    <p><strong>MeleeTrail:</strong> <em>&lt;Material&gt;</em></p>
    <p>The trail effect when swinging this weapon</p>
    <p> </p>
    <p><strong>MeleeTrail_Heavy:</strong> <em>&lt;Material&gt;</em></p>
    <p>The trail effect when swinging this weapon with a heavy attack</p>
    <p> </p>
    <p><strong>PistolWhipOverride:</strong> <em>&lt;</em><a href="#_StatCard_Animation"><em>StatCard_Animation</em></a><em>&gt;</em></p>
    <p>Override for special strike when holding this weapon</p>
    <p> </p>
    <p><strong>SweepWidth:</strong> <em>&lt;float&gt;</em></p>
    <p>Distance of which heavy attacks and charge-up attacks can reach</p>
    <p> </p>
    <p><strong>ThrowAnimation:</strong> <em>&lt;</em><a href="#_StatCard_Animation"><em>StatCard_Animation</em></a><em>&gt;</em></p>
    <p>Animation played when character throws this weapon</p>
    <p> </p>
    <p><strong>Traits:</strong> <em>List&lt;WeaponTraits&gt;</em></p>
    <p>List of traits that apply to this weapon</p>
    <p> </p>
    <p><strong>UsageAnimation:</strong> <em>&lt;</em><a href="#_StatCard_Animation"><em>StatCard_Animation</em></a><em>&gt;</em></p>
    <p>Animations played when character swings this weapon with one hand</p>
    <p> </p>
    <p><strong>UsageAnimation2xHand:</strong> <em>&lt;</em><a href="#_StatCard_Animation"><em>StatCard_Animation</em></a><em>&gt;</em></p>
    <p>Animations played when character swings this weapon with two hands</p>
    <p> </p>
    <p><strong>UsageSounds:</strong> <em>&lt;</em><a href="#_StatCard_SoundPack"><em>StatCard_SoundPack</em></a><em>&gt;</em></p>
    <p>The sound effects that this weapon makes</p>
    <p> </p>
    <p><strong>UsageAnim_CoreLevelRequired:</strong> <em>&lt;int&gt;</em></p>
    <p>The core rank that the characters melee skill must be for the usage animations to override their own</p>
    <p> </p>
    <p><strong>WallHit:</strong> <em>&lt;GameObject&gt;</em></p>
    <p>Particle effect when this weapon strikes against a surface</p>
    <p> </p>
    <h1 id="statcard_weaponaddon">StatCard_WeaponAddon</h1>
    <p>An attachment to a ranged weapon, adds its own properties to the attached weapon.</p>
    <p>Extends StatCard_WeaponStats_Additional</p>
    <p> </p>
    <p><strong>Type:</strong> <em>&lt;</em><a href="#_WeaponAddons"><em>WeaponAddons</em></a><em>&gt;</em></p>
    <p>The weapon addon slot that this weapon part occupies</p>
    <p> </p>
    <h1 id="statcard_weaponaddongroup">StatCard_WeaponAddonGroup</h1>
    <p>A collection of weapon addons that identify what attachments are allowed onto a ranged weapon</p>
    <p>Extends StatCard_Base</p>
    <p> </p>
    <p><strong>AddonStockpile:</strong> <em>List&lt;</em><a href="#_StatCard_WeaponAddon"><em>StatCard_WeaponAddon</em></a><em>&gt;</em></p>
    <p>List of compatible addons.</p>
    <p> </p>
    <h1 id="statcard_weaponmodded">StatCard_WeaponModded</h1>
    <p>A weapon that has been pre-modded with additional attachments; can not be used to remove existing attachments.</p>
    <p>Extends StatCard_Weapon</p>
    <p> </p>
    <p><strong>Addons:</strong> <em>List&lt;</em><a href="#_StatCard_WeaponAddon"><em>StatCard_WeaponAddon</em></a><em>&gt;</em></p>
    <p>Addons attached to this weapon.</p>
    <p> </p>
    <p><strong>EmptySlots:</strong> <em>List&lt;</em><a href="#_AddonLocations"><em>AddonLocations</em></a><em>&gt;</em></p>
    <p>Array of slots that will be cleared out of addons on the weapon</p>
    <p> </p>
    <p><strong>LinkedWeapon:</strong> <em>&lt;</em><a href="#_StatCard_Weapon"><em>StatCard_Weapon</em></a><em>&gt;</em></p>
    <p>The weapon that will be modded</p>
    <h1 id="statcard_weaponstats_base">StatCard_WeaponStats_Base</h1>
    <p>The base for ranged weapons and its components</p>
    <p>Extends StatCard_Weapon</p>
    <p> </p>
    <p><strong>Accuracy:</strong> <em>&lt;float&gt;</em></p>
    <p>Base accuracy of this weapon component; caps out at 100 in weapon system</p>
    <p> </p>
    <p><strong>ArmorPiercing:</strong> <em>&lt;float&gt;</em></p>
    <p>Amount of armor piercing this weapon component has</p>
    <p> </p>
    <p><strong>Damage:</strong> <em>&lt;float&gt;</em></p>
    <p>Base damage that this weapon component does</p>
    <p> </p>
    <p><strong>Loudness:</strong> <em>&lt;float&gt;</em></p>
    <p>The amount of noise this weapon makes, affects alert radius of NPCs not in combat</p>
    <p> </p>
    <p><strong>Range:</strong> <em>&lt;float&gt;</em></p>
    <p>Distance of this weapons sweetspot</p>
    <p> </p>
    <p><strong>Recoil:</strong> <em>&lt;float&gt;</em></p>
    <p>The amount of recoil this weapon causes when fired/thrown</p>
    <p> </p>
    <h1 id="statcard_weaponstats_additional">StatCard_WeaponStats_Additional</h1>
    <p>Additional properties for the weapons themselves</p>
    <p>Extends StatCard_WeaponStats_Base</p>
    <p> </p>
    <p><strong>Ammo:</strong> <em>&lt;int&gt;</em></p>
    <p>The amount of ammo this weapon component contains</p>
    <p> </p>
    <p><strong>AmmoType:</strong> <em>&lt;</em><a href="#_StatCard_Ammo"><em>StatCard_Ammo</em></a><em>&gt;</em></p>
    <p>The type of munitions chambered by this weapon component</p>
    <p>All weapon properties of the parent weapon are added to the munitions when fired</p>
    <p> </p>
    <p><strong>BonusRounds:</strong> <em>&lt;int&gt;</em></p>
    <p>Additional ammunition added on to current ammo + magazines</p>
    <p> </p>
    <p><strong>BurstFire:</strong> <em>&lt;int&gt;</em></p>
    <p>The minimum amount of rounds that this weapon fires</p>
    <p> </p>
    <p><strong>mySoundPath:</strong> <em>&lt;string&gt;</em></p>
    <p>Directory for the sound this weapon makes when firing</p>
    <p> </p>
    <p><strong>RateOfFire:</strong> <em>&lt;float&gt;</em></p>
    <p>Cyclic rate of fire, measured in rounds per minute</p>
    <p> </p>
    <p><strong>Recovery:</strong> <em>&lt;float&gt;</em></p>
    <p>The speed at which this weapon naturally recovers from recoil</p>
    <p> </p>
    <p><strong>Reliability:</strong> <em>&lt;float&gt;</em></p>
    <p> </p>
    <p><strong>Reload:</strong> <em>&lt;float&gt;</em></p>
    <p>The amount of frames this weapon takes in between reloading phases</p>
    <p> </p>
    <p><strong>Stability:</strong> <em>&lt;float&gt;</em></p>
    <p>The rate at which a weapon stabilizes after turning</p>
    <h1 id="additional-objects">Additional Objects</h1>
    <p> </p>
    <ul>
    <li><p>Arena_Wave_Sequence</p></li>
    <li><p>ArmorList</p></li>
    <li><p>BonusStats</p></li>
    <li><p>BossPatternData</p></li>
    <li><p>ColorPair</p></li>
    <li><p>ColorSolo</p></li>
    <li><p>DeathEvents</p></li>
    <li><p>Mission_Instance</p></li>
    <li><p>Part_BodyPart</p></li>
    <li><p>UniformWearable</p></li>
    <li><p>SingleCharacter</p></li>
    <li><p>WaveCharacter_Arena</p></li>
    <li><p>WaveCharacter</p></li>
    </ul>
    <h1 id="arena_wave_sequence">Arena_Wave_Sequence</h1>
    <p>The object that defines a checkpoint in arena stages; can define the number of waves, bonus modifiers, and the enemy types that generate during this checkpoint.</p>
    <p> </p>
    <p><strong>Bosses:</strong> <em>&lt;</em><a href="#_SingleCharacter_1"><em>SingleCharacter</em></a><em>&gt;[]</em></p>
    <p>Array of bosses that show up in this checkpoint; distributed evenly amongst number of waves</p>
    <p>If there are more bosses than waves, bosses will stack up on each other, allowing for multiple bosses per wave</p>
    <p>Bosses are assigned a boss controller.</p>
    <p> </p>
    <p><strong>Cash:</strong> <em>&lt;int&gt;</em></p>
    <p>The base amount of cash the first wave rewards on completing a wave</p>
    <p> </p>
    <p><strong>TotalWaves:</strong> <em>&lt;int&gt;</em></p>
    <p>The amount of waves this checkpoint has; -1 = infinite amount</p>
    <p> </p>
    <p><strong>Units:</strong> <em>&lt;WaveCharacter_Arena&gt;[]</em></p>
    <p>The units that show up in this checkpoint</p>
    <p> </p>
    <p><strong>WaveMult_Cash:</strong> <em>&lt;float&gt;</em></p>
    <p>Multiplier for cash reward with each wave</p>
    <p> </p>
    <p><strong>WaveMult_XP:</strong> <em>&lt;float&gt;</em></p>
    <p>Multiplier for XP reward with each wave</p>
    <p> </p>
    <p><strong>XP:</strong> <em>&lt;int&gt;</em></p>
    <p>The base amount of XP the first wave rewards on completing a wave</p>
    <h1 id="armorlist">ArmorList</h1>
    <p>A list of armor types, used for being picked at random. Multiple instances of the same armor set can be used to add weight or preference to certain armor types.</p>
    <p> </p>
    <p><strong>Armor:</strong> <em>List&lt;</em><a href="#_StatCard_Armor"><em>StatCard_Armor</em></a><em>&gt;</em></p>
    <h1 id="bonusstats">BonusStats</h1>
    <p>A bonus modifier that can alters a characters properties.</p>
    <p> </p>
    <p><strong>Amount:</strong> <em>&lt;float&gt;</em></p>
    <p>The amount added to the attribute Type</p>
    <p> </p>
    <p><strong>AmPercent:</strong> <em>&lt;bool&gt;</em></p>
    <p>If enabled, amount will be treated as a percentage multiplier (1 = 100%)</p>
    <p> </p>
    <p><strong>Description:</strong> <em>&lt;string&gt;</em></p>
    <p>A brief summary of this bonus, displayed in character origins</p>
    <p> </p>
    <p><strong>MarkAsGood:</strong> <em>&lt;bool&gt;</em></p>
    <p>If enabled, text will be highlighted green in origin display.</p>
    <p> </p>
    <p><strong>Name:</strong> <em>&lt;string&gt;</em></p>
    <p>The name of this bonus, displayed in character origins</p>
    <p> </p>
    <p><strong>Type:</strong> <em>&lt;BonusType&gt;</em></p>
    <p>The property this bonus applies to</p>
    <h1 id="bosspatterndata">BossPatternData</h1>
    <p>Parameters for AI adjustments for a boss NPC. BossPatternData is organized in a list and is activated when the boss enters its next corpus block.</p>
    <p> </p>
    <p><strong>PatternName:</strong> <em>&lt;string&gt;</em></p>
    <p>The name of this pattern</p>
    <p> </p>
    <p><strong>BossSays:</strong> <em>&lt;string&gt;</em></p>
    <p>If not empty, the character will narrate this line when entering this phase</p>
    <p> </p>
    <p><strong>ConstantModules:</strong> <em>&lt;string&gt;[]</em></p>
    <p>Array of AI Modules to enable when entering this phase, will remain active afterwards</p>
    <p> </p>
    <p><strong>PhaseModules:</strong> <em>&lt;string&gt;[]</em></p>
    <p>Array of AI Modules to enable when entering this phase, will be automatically removed afterwards</p>
    <p> </p>
    <p><strong>RemoveModules:</strong> <em>&lt;string&gt;[]</em></p>
    <p>Array of AI Modules to be removed when entering this phase, can be used for removing any existing or constant modules</p>
    <p> </p>
    <p><strong>OneShots:</strong> <em>&lt;string&gt;[]</em></p>
    <p>Array AI One shots that only occur once upon entering this phase.</p>
    <p> </p>
    <p><strong>BehaviorAdd:</strong> <em>&lt;</em><a href="#_BehaviorList"><em>BehaviorList</em></a><em>&gt;[]</em></p>
    <p>Adds behaviors at this phase (Does not automatically add modules, behaviors are not removed on the next phase)</p>
    <p> </p>
    <p><strong>BehaviorRemove:</strong> <em>&lt;</em><a href="#_BehaviorList"><em>BehaviorList</em></a><em>&gt;[]</em></p>
    <p>Removes behaviors at this phase (Does not automatically remove modules)</p>
    <p> </p>
    <p><strong>TraitAdd:</strong> <em>&lt;</em><a href="#_TraitsList"><em>TraitsList</em></a><em>&gt;[]</em></p>
    <p>Adds traits at this phase (Traits are not removed automatically)</p>
    <p> </p>
    <p><strong>TraitRemove:</strong> <em>&lt;</em><a href="#_TraitsList"><em>TraitsList</em></a><em>&gt;[]</em></p>
    <p>Removes traits for this phase</p>
    <p> </p>
    <p><strong>PatternBonuses:</strong> <em>List&lt;</em><a href="#_BonusStats"><em>BonusStats</em></a><em>&gt;</em></p>
    <p>Bonuses applied to this character when in this phase (Bonuses are not removed on the next phase)</p>
    <h1 id="colorpair">ColorPair</h1>
    <p>A pair of colors to be applied to armor, can be toggled.</p>
    <p> </p>
    <p><strong>Color1:</strong> <em>&lt;Color&gt;</em></p>
    <p> </p>
    <p><strong>Color2:</strong> <em>&lt;Color&gt;</em></p>
    <p> </p>
    <p><strong>Name:</strong> <em>&lt;string&gt;</em></p>
    <p>The name of this color, displayed in color station.</p>
    <h1 id="colorsolo">ColorSolo</h1>
    <p>A glass color to be applied to armor</p>
    <p> </p>
    <p><strong>Color1:</strong> <em>&lt;Color&gt;</em></p>
    <p> </p>
    <p><strong>Name:</strong> <em>&lt;string&gt;</em></p>
    <p>The name of this color, displayed in color station.</p>
    <h1 id="deathevents">DeathEvents</h1>
    <p>The event that occurs in which a character dies, typically used for resurrection</p>
    <p> </p>
    <p><strong>ChanceToFail:</strong> <em>&lt;float&gt;</em></p>
    <p>The percent chance (0 -1) that this death event can fail. Failure results in characters death</p>
    <p> </p>
    <p><strong>DestroyLinkedArmor:</strong> <em>&lt;Catalog_Armor.ArmorSlots &gt;</em></p>
    <p>The armor in this slot is destroyed on this death event.</p>
    <p> </p>
    <p><strong>FlashColor:</strong> <em>&lt;Color&gt;</em></p>
    <p>Flash this color during the RecoverAnimation</p>
    <p> </p>
    <p><strong>FlashTimes:</strong> <em>&lt;int&gt;</em></p>
    <p>Flash this amount of times during the RecoverAnimation</p>
    <p> </p>
    <p><strong>GiveSkills:</strong> <em>&lt;</em><a href="#_StatCard_SkillGroup"><em>StatCard_SkillGroup</em></a><em>&gt;</em></p>
    <p>Character will have this skillgroip on this death event.</p>
    <p> </p>
    <p><strong>Invincibility:</strong> <em>&lt;float&gt;</em></p>
    <p>Amount of invincibility frames</p>
    <p> </p>
    <p><strong>InvincibilityType:</strong> <em>&lt;DeathEvent.InvincibilityTypes&gt;</em></p>
    <p>Type of invincibility</p>
    <p> </p>
    <p><strong>LastCorpusOnly:</strong> <em>&lt;bool&gt;</em></p>
    <p>If enabled, death event only occurs when this is the last corpus block</p>
    <p> </p>
    <p><strong>NoAdvanceOnFail:</strong> <em>&lt;bool&gt;</em></p>
    <p>If enabled, character does not advance to next death event and dies</p>
    <p> </p>
    <p><strong>PlaySFX:</strong> <em>&lt;string&gt;</em></p>
    <p>Directory for sound that plays on this death event</p>
    <p> </p>
    <p><strong>PreventDeathAnimation:</strong> <em>&lt;bool&gt;</em></p>
    <p>If enabled, character doesnt play death animation and simply ragdolls</p>
    <p> </p>
    <p><strong>PreventRegen:</strong> <em>List&lt;</em><a href="#_DeathFlags"><em>DeathFlags</em></a><em>&gt;</em></p>
    <p>Death Events do not occur under any of these conditions</p>
    <p> </p>
    <p><strong>RecoverAnimation:</strong> <em>&lt;</em><a href="#_StatCard_Animation"><em>StatCard_Animation</em></a><em>&gt;</em></p>
    <p>The animation played when standing up from ragdoll</p>
    <p> </p>
    <p><strong>RegenMaxHealth:</strong> <em>&lt;int&gt;</em></p>
    <p>The amount of health to regenerate for this corpus block</p>
    <p> </p>
    <p><strong>ReplaceFinalCorpus:</strong> <em>&lt;</em><a href="#_StatCard_Corpus"><em>StatCard_Corpus</em></a><em>&gt;</em></p>
    <p>If this is the last corpus block, it will be replaced by this one on this death event</p>
    <p> </p>
    <p><strong>Retries:</strong> <em>&lt;int&gt;</em></p>
    <p>Amount of times this death event in the sequence is allowed to repeat; -1 means infinite unless if it fails</p>
    <p> </p>
    <p><strong>RezInnertRagdoll:</strong> <em>&lt;bool&gt;</em></p>
    <p>If enabled, character will be in a ragdoll state for a short while before resurrecting</p>
    <p> </p>
    <h1 id="mission_instance">Mission_Instance</h1>
    <p>A mission that occurs during a playthough of a stage</p>
    <p>TODO</p>
    <h1 id="part_bodypart">Part_BodyPart</h1>
    <p>An alternative body part to swap with a character</p>
    <p>TODO</p>
    <h1 id="singlecharacter">SingleCharacter</h1>
    <p>A single character used for boss spawns, has customizable loadout</p>
    <p> </p>
    <p><strong>Gear:</strong> <em>List&lt;</em><a href="#_StatCard_Armor"><em>StatCard_Armor</em></a><em>&gt;</em></p>
    <p>List of armor to replace characters default armor</p>
    <p> </p>
    <p><strong>Key:</strong> <em>&lt;</em><a href="#_StatCard_Collectible"><em>StatCard_Collectible</em></a><em>&gt;</em></p>
    <p>The collectible that this character drops on defeat; typically used for story mode</p>
    <p> </p>
    <p><strong>Sidearm:</strong> <em>&lt;</em><a href="#_StatCard_Weapon"><em>StatCard_Weapon</em></a><em>&gt;</em></p>
    <p>The secondary weapon on the characters back, will automatically be equipped in off-hand if shield</p>
    <p> </p>
    <p><strong>Throwable:</strong> <em>&lt;</em><a href="#_StatCard_Thrown"><em>StatCard_Thrown</em></a><em>&gt;</em></p>
    <p>The teritiary weapon equipped in characters grenade slot</p>
    <p> </p>
    <p><strong>Type:</strong> <em>&lt;</em><a href="#_StatCard_Character"><em>StatCard_Character</em></a><em>&gt;</em></p>
    <p>The character generated</p>
    <p> </p>
    <p><strong>Weapon:</strong> <em>&lt;</em><a href="#_StatCard_Weapon"><em>StatCard_Weapon</em></a><em>&gt;</em></p>
    <p>The characters primary weapon</p>
    <p> </p>
    <h1 id="uniformwearable">UniformWearable</h1>
    <p>An armor item with set modifications for color and styles.</p>
    <p> </p>
    <p><strong>AltMaterialIndex:</strong> <em>&lt;int&gt;</em></p>
    <p>The clamped index of the chosen armors material set; -1 = choose at random</p>
    <p> </p>
    <p><strong>AltMeshIndex:</strong> <em>&lt;int&gt;</em></p>
    <p>The clamped index of the chosen armors mesh; -1 = choose at random</p>
    <p> </p>
    <p><strong>ArmorPicks:</strong> <em>&lt;</em><a href="#_ArmorList"><em>ArmorList</em></a><em>&gt;</em></p>
    <p>Array of randomly selected armor lists.</p>
    <p>All armor pieces must be valid, cannot be empty</p>
    <p> </p>
    <p><strong>Glass:</strong> <em>&lt;Color&gt;</em></p>
    <p> </p>
    <p><strong>Tint1:</strong> <em>&lt;Color&gt;</em></p>
    <p> </p>
    <p><strong>Tint2:</strong> *&lt;Color&gt;</p>
    <p> </p>
    <h1 id="wavecharacter">WaveCharacter</h1>
    <p>Specifies the total amount of a unit in addition to their distribution in a wave</p>
    <p> </p>
    <p><strong>GenerationScale:</strong> <em>&lt;float&gt;</em></p>
    <p>Percentage (0-1) of distribution of units</p>
    <p>If value is 0, units are distributed uniformly</p>
    <p>If value &gt; 0, units will generate after this percentage of all preceding units in list</p>
    <p>If value = 1, units will show up after all of the preceding units in list</p>
    <p> </p>
    <p><strong>Total:</strong> <em>&lt;int&gt;</em></p>
    <p>Total amount of this unit type in the starting wave, value &lt;= 0 means units will not spawn</p>
    <p> </p>
    <p><strong>Type:</strong> <em>&lt;</em><a href="#_StatCard_Character"><em>StatCard_Character</em></a><em>&gt;</em></p>
    <p>The character generated</p>
    <p>  # WaveCharacter_Arena</p>
    <p>Specifies the increment of WaveCharacters to spawn in arena</p>
    <p> </p>
    <p><strong>AddUnitsPerWave:</strong> <em>&lt;int&gt;</em></p>
    <p>The amount of this type to add with each wave in a sequence</p>
    <p> </p>
    <p><strong>UnitType:</strong> <em>&lt;WaveCharacter&gt;</em></p>
    <p>The character to add in a wave</p>
    <p> </p>
    <h1 id="enums">Enums</h1>
    <ul>
    <li><p>AddonLocations</p></li>
    <li><p>Arena_Magnager</p>
    <ul>
    <li>ArenaMode</li>
    </ul></li>
    <li><p>Catalog_Armor</p>
    <ul>
    <li>ArmorSlots</li>
    </ul></li>
    <li><p>AttributeList</p></li>
    <li><p>ArmorTraits</p></li>
    <li><p>BehaviorList</p></li>
    <li><p>BonusType</p></li>
    <li><p>Buffs_Manager</p>
    <ul>
    <li>BuffEffects</li>
    </ul></li>
    <li><p>Execution_Manager</p>
    <ul>
    <li>Conditions</li>
    </ul></li>
    <li><p>DamageType</p></li>
    <li><p>DeathFlags</p></li>
    <li><p>DoT_Manager</p>
    <ul>
    <li>Effects</li>
    </ul></li>
    <li><p>Factions</p></li>
    <li><p>ItemGenre</p></li>
    <li><p>ModelParts</p></li>
    <li><p>DoT_Manager</p>
    <ul>
    <li>ResolutionConditions</li>
    </ul></li>
    <li><p>Catalog_Skills</p>
    <ul>
    <li>SkillGroups</li>
    </ul></li>
    <li><p>SkillsList</p></li>
    <li><p>Execution_Manager</p>
    <ul>
    <li>Source</li>
    </ul></li>
    <li><p>HeadQuarters_Manager</p>
    <ul>
    <li>StartLocation</li>
    </ul></li>
    <li><p>TraitsList</p></li>
    <li><p>VocationsList</p></li>
    <li><p>WeaponAddons</p></li>
    <li><p>WeaponCategories</p></li>
    </ul>
</div>

<style>
    h1{
        font-size: 50px;
        white-space: nowrap;
    }

    .Explanation{
        margin-bottom: 7px;
    }
    .intro{
        text-align: center;
    }
    .content{
        text-align: center;
        margin-top: 20px;
        margin-left: 10%;
        margin-right: 10%;
        background-color: #242424;
        padding: 1em;
        border: 5px solid #333333;
    }
    ul{
        /* center it */
        display: inline-block;
        text-align: left;
    }
    li{
        font-size: 20px;
        white-space: nowrap;
    }

    .links{
        text-align: center;
    }
    .links a{
        font-size: 15px;
        margin: 0;
        padding: 0;
        margin-left: 5px;
        margin-right: 5px;
    }
</style>