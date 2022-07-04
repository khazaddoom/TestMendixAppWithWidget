// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package mendixsso.proxies;

public class PlatformSession
{
	private final com.mendix.systemwideinterfaces.core.IMendixObject platformSessionMendixObject;

	private final com.mendix.systemwideinterfaces.core.IContext context;

	/**
	 * Internal name of this entity
	 */
	public static final java.lang.String entityName = "MendixSSO.PlatformSession";

	/**
	 * Enum describing members of this entity
	 */
	public enum MemberNames
	{
		SessionId("SessionId"),
		PlatformSession_Session("MendixSSO.PlatformSession_Session");

		private final java.lang.String metaName;

		MemberNames(java.lang.String s)
		{
			metaName = s;
		}

		@java.lang.Override
		public java.lang.String toString()
		{
			return metaName;
		}
	}

	public PlatformSession(com.mendix.systemwideinterfaces.core.IContext context)
	{
		this(context, com.mendix.core.Core.instantiate(context, entityName));
	}

	protected PlatformSession(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject platformSessionMendixObject)
	{
		if (platformSessionMendixObject == null) {
			throw new java.lang.IllegalArgumentException("The given object cannot be null.");
		}
		if (!com.mendix.core.Core.isSubClassOf(entityName, platformSessionMendixObject.getType())) {
			throw new java.lang.IllegalArgumentException(String.format("The given object is not a %s", entityName));
		}	

		this.platformSessionMendixObject = platformSessionMendixObject;
		this.context = context;
	}

	/**
	 * @deprecated Use 'PlatformSession.load(IContext, IMendixIdentifier)' instead.
	 */
	@java.lang.Deprecated
	public static mendixsso.proxies.PlatformSession initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		return mendixsso.proxies.PlatformSession.load(context, mendixIdentifier);
	}

	/**
	 * Initialize a proxy using context (recommended). This context will be used for security checking when the get- and set-methods without context parameters are called.
	 * The get- and set-methods with context parameter should be used when for instance sudo access is necessary (IContext.createSudoClone() can be used to obtain sudo access).
	 * @param context The context to be used
	 * @param mendixObject The Mendix object for the new instance
	 * @return a new instance of this proxy class
	 */
	public static mendixsso.proxies.PlatformSession initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject mendixObject)
	{
		return new mendixsso.proxies.PlatformSession(context, mendixObject);
	}

	public static mendixsso.proxies.PlatformSession load(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		com.mendix.systemwideinterfaces.core.IMendixObject mendixObject = com.mendix.core.Core.retrieveId(context, mendixIdentifier);
		return mendixsso.proxies.PlatformSession.initialize(context, mendixObject);
	}

	public static java.util.List<mendixsso.proxies.PlatformSession> load(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String xpathConstraint) throws com.mendix.core.CoreException
	{
		return com.mendix.core.Core.createXPathQuery(String.format("//%1$s%2$s", entityName, xpathConstraint))
			.execute(context)
			.stream()
			.map(obj -> mendixsso.proxies.PlatformSession.initialize(context, obj))
			.collect(java.util.stream.Collectors.toList());
	}

	/**
	 * Commit the changes made on this proxy object.
	 * @throws com.mendix.core.CoreException
	 */
	public final void commit() throws com.mendix.core.CoreException
	{
		com.mendix.core.Core.commit(context, getMendixObject());
	}

	/**
	 * Commit the changes made on this proxy object using the specified context.
	 * @throws com.mendix.core.CoreException
	 */
	public final void commit(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		com.mendix.core.Core.commit(context, getMendixObject());
	}

	/**
	 * Delete the object.
	 */
	public final void delete()
	{
		com.mendix.core.Core.delete(context, getMendixObject());
	}

	/**
	 * Delete the object using the specified context.
	 */
	public final void delete(com.mendix.systemwideinterfaces.core.IContext context)
	{
		com.mendix.core.Core.delete(context, getMendixObject());
	}
	/**
	 * @return value of SessionId
	 */
	public final java.lang.String getSessionId()
	{
		return getSessionId(getContext());
	}

	/**
	 * @param context
	 * @return value of SessionId
	 */
	public final java.lang.String getSessionId(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.SessionId.toString());
	}

	/**
	 * Set value of SessionId
	 * @param sessionid
	 */
	public final void setSessionId(java.lang.String sessionid)
	{
		setSessionId(getContext(), sessionid);
	}

	/**
	 * Set value of SessionId
	 * @param context
	 * @param sessionid
	 */
	public final void setSessionId(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String sessionid)
	{
		getMendixObject().setValue(context, MemberNames.SessionId.toString(), sessionid);
	}

	/**
	 * @throws com.mendix.core.CoreException
	 * @return value of PlatformSession_Session
	 */
	public final system.proxies.Session getPlatformSession_Session() throws com.mendix.core.CoreException
	{
		return getPlatformSession_Session(getContext());
	}

	/**
	 * @param context
	 * @return value of PlatformSession_Session
	 * @throws com.mendix.core.CoreException
	 */
	public final system.proxies.Session getPlatformSession_Session(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		system.proxies.Session result = null;
		com.mendix.systemwideinterfaces.core.IMendixIdentifier identifier = getMendixObject().getValue(context, MemberNames.PlatformSession_Session.toString());
		if (identifier != null) {
			result = system.proxies.Session.load(context, identifier);
		}
		return result;
	}

	/**
	 * Set value of PlatformSession_Session
	 * @param platformsession_session
	 */
	public final void setPlatformSession_Session(system.proxies.Session platformsession_session)
	{
		setPlatformSession_Session(getContext(), platformsession_session);
	}

	/**
	 * Set value of PlatformSession_Session
	 * @param context
	 * @param platformsession_session
	 */
	public final void setPlatformSession_Session(com.mendix.systemwideinterfaces.core.IContext context, system.proxies.Session platformsession_session)
	{
		if (platformsession_session == null) {
			getMendixObject().setValue(context, MemberNames.PlatformSession_Session.toString(), null);
		} else {
			getMendixObject().setValue(context, MemberNames.PlatformSession_Session.toString(), platformsession_session.getMendixObject().getId());
		}
	}

	/**
	 * @return the IMendixObject instance of this proxy for use in the Core interface.
	 */
	public final com.mendix.systemwideinterfaces.core.IMendixObject getMendixObject()
	{
		return platformSessionMendixObject;
	}

	/**
	 * @return the IContext instance of this proxy, or null if no IContext instance was specified at initialization.
	 */
	public final com.mendix.systemwideinterfaces.core.IContext getContext()
	{
		return context;
	}

	@java.lang.Override
	public boolean equals(Object obj)
	{
		if (obj == this) {
			return true;
		}
		if (obj != null && getClass().equals(obj.getClass()))
		{
			final mendixsso.proxies.PlatformSession that = (mendixsso.proxies.PlatformSession) obj;
			return getMendixObject().equals(that.getMendixObject());
		}
		return false;
	}

	@java.lang.Override
	public int hashCode()
	{
		return getMendixObject().hashCode();
	}

	/**
	 * @return String name of this class
	 */
	public static java.lang.String getType()
	{
		return entityName;
	}

	/**
	 * @return String GUID from this object, format: ID_0000000000
	 * @deprecated Use getMendixObject().getId().toLong() to get a unique identifier for this object.
	 */
	@java.lang.Deprecated
	public java.lang.String getGUID()
	{
		return "ID_" + getMendixObject().getId().toLong();
	}
}
