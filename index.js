module.exports = (bitfield) => {
	bitfield = BigInt(bitfield);
	let perms = {
		CREATE_INSTANT_INVITE: 0x0000000001n,
		KICK_MEMBERS: 0x0000000002n,
		BAN_MEMBERS: 0x0000000004n,
		ADMINISTRATOR: 0x0000000008n,
		MANAGE_CHANNELS: 0x0000000010n,
		MANAGE_GUILD: 0x0000000020n,
		ADD_REACTIONS: 0x0000000040n,
		VIEW_AUDIT_LOG: 0x0000000080n,
		PRIORITY_SPEAKER: 0x0000000100n,
		STREAM: 0x0000000200n,
		VIEW_CHANNEL: 0x0000000400n,
		SEND_MESSAGES: 0x0000000800n,
		SEND_TTS_MESSAGES: 0x0000001000n,
		MANAGE_MESSAGES: 0x0000002000n,
		EMBED_LINKS: 0x0000004000n,
		ATTACH_FILES: 0x0000008000n,
		READ_MESSAGE_HISTORY: 0x0000010000n,
		MENTION_EVERYONE: 0x0000020000n,
		USE_EXTERNAL_EMOJIS: 0x0000040000n,
		VIEW_GUILD_INSIGHTS: 0x0000080000n,
		CONNECT: 0x0000100000n,
		SPEAK: 0x0000200000n,
		MUTE_MEMBERS: 0x0000400000n,
		DEAFEN_MEMBERS: 0x0000800000n,
		MOVE_MEMBERS: 0x0001000000n,
		USE_VAD: 0x0002000000n,
		CHANGE_NICKNAME: 0x0004000000n,
		MANAGE_NICKNAMES: 0x0008000000n,
		MANAGE_ROLES: 0x0010000000n,
		MANAGE_WEBHOOKS: 0x0020000000n,
		MANAGE_EMOJIS_AND_STICKERS: 0x0040000000n,
		USE_APPLICATION_COMMANDS: 0x0080000000n,
		REQUEST_TO_SPEAK: 0x0100000000n,
		MANAGE_THREADS: 0x0400000000n,
		USE_PUBLIC_THREADS: 0x0800000000n,
		USE_PRIVATE_THREADS: 0x1000000000n,
		USE_EXTERNAL_STICKERS: 0x2000000000n,
	};
	return Object.entries(perms)
		.filter(([_perm_name, perm_bitfield]) => {
			return (bitfield & perm_bitfield) == perm_bitfield;
		})
		.map(([perm]) => perm);
};
